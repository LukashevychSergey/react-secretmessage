function About() {
  return (
    <div className="container">
      <p className="mt-4">
        Шифрова́ние — обратимое преобразование информации в целях сокрытия от
        неавторизованных лиц, с предоставлением, в это же время, авторизованным
        пользователям доступа к ней. Главным образом, шифрование служит задачей
        соблюдения конфиденциальности передаваемой информации. Важной
        особенностью любого алгоритма шифрования является использование ключа,
        который утверждает выбор конкретного преобразования из совокупности
        возможных для данного алгоритма. Пользователи являются авторизованными,
        если они обладают определённым аутентичным ключом. Вся сложность и,
        собственно, задача шифрования состоит в том, как именно реализован этот
        процесс. В целом, шифрование состоит из двух составляющих — зашифрование
        и расшифрование. С помощью шифрования обеспечиваются три состояния
        безопасности информации: Конфиденциальность. Шифрование используется для
        скрытия информации от неавторизованных пользователей при передаче или
        при хранении. Целостность. Шифрование используется для предотвращения
        изменения информации при передаче или хранении. Идентифицируемость.
        Шифрование используется для аутентификации источника информации и
        предотвращения отказа отправителя информации от того факта, что данные
        были отправлены именно им. Для того, чтобы прочитать зашифрованную
        информацию, принимающей стороне необходимы ключ и дешифратор
        (устройство, реализующее алгоритм расшифровывания). Идея шифрования
        состоит в том, что злоумышленник, перехватив зашифрованные данные и не
        имея к ним ключа, не может ни прочитать, ни изменить передаваемую
        информацию. Кроме того, в современных криптосистемах (с открытым ключом)
        для шифрования, расшифрования данных могут использоваться разные ключи.
        Однако, с развитием криптоанализа, появились методики, позволяющие
        дешифровать закрытый текст без ключа. Они основаны на математическом
        анализе переданных данных.
      </p>
      <p className="mt-3">
        Encryption is the reversible transformation of information in order to
        hide it from unauthorized persons, while providing, at the same time,
        access to it for authorized users. Mainly, encryption serves the purpose
        of maintaining the confidentiality of the transmitted information. An
        important feature of any encryption algorithm is the use of a key that
        approves the choice of a specific transformation from the set of
        possible ones for a given algorithm . Users are authorized if they have
        a certain authentic key . All the complexity and, in fact, the problem
        of encryption is how exactly this process is implemented . In general,
        encryption has two parts - encryption and decryption. With the help of
        encryption, three states of information security are provided :
        Confidentiality. Encryption is used to hide information from
        unauthorized users during transmission or storage. Integrity. Encryption
        is used to prevent information being changed during transmission or
        storage. Identifiability. Encryption is used to authenticate the source
        of information and prevent the sender of information from denying the
        fact that the data was sent to them. In order to read the encrypted
        information, the receiving party needs a key and a decryptor (a device
        that implements the decryption algorithm). The idea of ​​encryption is
        that an attacker, intercepting encrypted data and not having a key to
        it, can neither read nor change the transmitted information. In
        addition, in modern cryptosystems (with a public key) , different keys
        can be used for encryption and decryption of data. However, with the
        development of cryptanalysis, techniques have appeared that allow
        decrypting a private text without a key. They are based on a
        mathematical analysis of the transmitted data.
      </p>
    </div>
  );
}

export default About;
