import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';

function Note() {
  let { noteURL } = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide'); // скрываем
  const [errorClass, setErrorClass] = useState('hide'); // скрываем

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ url: noteURL }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.result) {
            setNoteText(response.note);
            setLineClass('');
            setFormClass('hide');
            setErrorClass('hide');
          } else if (!response.result) {
            setLineClass('hide');
            setFormClass('hide');
            setErrorClass('');
          }
        });
    } else {
      setLineClass('hide');
      setFormClass('');
      setErrorClass('hide');
    }
  }, [noteURL]);

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      alert('Заполните поля');
      return false;
    }
    noteURL = url;
    window.location.href = env.url + '/' + url;
  }

  function searchNote() {
    window.location.href = env.url;
  }
  return (
    <div>
      <div className={lineClass}>
        <h4 className="text-center mt-4 mb-4">Ваше сообщение:</h4>
        <div className="mess text-center">{noteText}</div>
        <div className=" text-center mt-3">
          <button onClick={searchNote} className="btn btn-primary">
            Посмотреть другое сообщение
          </button>
        </div>
      </div>
      <div className={errorClass}>
        <p className="text-center fs-3 mt-5 p-error ">
          Произошла ошибка. Такой hash не найден!!!
        </p>
        <div className="text-center">
          <button onClick={searchNote} className="btn btn-primary text-center">
            Посмотреть другое сообщение
          </button>
        </div>
      </div>
      <div className={formClass}>
        <form action="" onSubmit={getNote} className="text-center mt-3">
          <label htmlFor="url" className="text-center mt-3 mb-3 fs-4">
            Введите hash из Вашей ссылки (без http://localhost:3000/note/)
          </label>
          <input
            type="text"
            name="url"
            id="url"
            className="form-control text-center inp "
          />
          <button type="submit" className="btn btn-primary text-center mt-3">
            Искать Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default Note;
