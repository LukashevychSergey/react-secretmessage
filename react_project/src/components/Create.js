import React from 'react';
import { useState } from 'react';
import env from '../env.json';

function Create() {
  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide'); // скрываем
  const [formClass, setFormClass] = useState(''); // скрываем

  let sendData = (obj) => {
    setFormClass('hide');
    setLineClass('');
    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result) {
          setUrl(env.url + '/' + response.url);
        }
      });
  };

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      alert('Заполните поля');
      return false;
    }
    sendData({ note: note });
  };

  return (
    <div className="text-center">
      <form onSubmit={loadDataFromForm} className={formClass}>
        <label htmlFor="" className="text-center mt-4 fs-2">
          Введите секретное сообщение:
        </label>
        <p className="text-center mt-3">
          Отправленное Вами сообщение будет прочитано лишь один раз и будет
          удалено с сервера в течение 15 минут!
        </p>
        <textarea
          name="note"
          id="note"
          defaultValue=""
          className="form-control w-50 p-3 text-center mt-4 "
        ></textarea>
        <p className="text-center">
          Внимание! Максимальное колличество символов: 1000!
        </p>
        <button type="submit" className="btn btn-success text-center mt-4 ">
          Создать секретное сообщение
        </button>
      </form>
      <div className={lineClass}>
        <p className="text-center mt-3 mb-3">
          Данная ссылка на Ваше сообщение которое будет удалено через 15 минут!
        </p>
        <div className="text-center mt-4 mess mb-3">{url}</div>
        <div className="text-center">
          <button
            className="btn btn-primary mt-2"
            onClick={function () {
              window.location.reload();
            }}
          >
            Cоздать новую заметку
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
