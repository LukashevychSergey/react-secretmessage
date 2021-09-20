function Main() {
  return (
    <>
      <div className=" form-row linka shadow-lg  rounded text-center ">
        <div className="col-12">
          <button className="btn ">
            <a href="/create" className="">
              Создать секретное сообщение
            </a>
          </button>
        </div>
      </div>
      <div className="text-center">
        <p>Чтобы создать Note и отправить секретное сообщение</p>
      </div>

      <div className="form-row linka shadow-lg  rounded text-center">
        <button className="btn ">
          <a href="/note" className="">
            Просмотреть секретное сообщение
          </a>
        </button>
      </div>
      <div className="text-center">
        <p>Чтобы просмотреть уже существующий Message </p>
      </div>
    </>
  );
}

export default Main;
