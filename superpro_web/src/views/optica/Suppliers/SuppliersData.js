const suppliersData = [
  {codigo: 0, cedula: '1-5254-1124', nombre: 'John Doe', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 1, cedula: '1-5254-1124', nombre: 'Samppa Nori', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 2, cedula: '1-5254-1124', nombre: 'Estavan Lykos', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 3, cedula: '1-5254-1124', nombre: 'Chetan Mohamed', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 4, cedula: '1-5254-1124', nombre: 'Derick Maximinus', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 5, cedula: '1-5254-1124', nombre: 'Friderik Dávid', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 6, cedula: '1-5254-1124', nombre: 'Yiorgos Avraamu', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 7, cedula: '1-5254-1124', nombre: 'Avram Tarasios', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 8, cedula: '1-5254-1124', nombre: 'Quintin Ed', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 9, cedula: '1-5254-1124', nombre: 'Enéas Kwadwo', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 10, cedula: '1-5254-1124', nombre: 'Agapetus Tadeáš', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 11, cedula: '1-5254-1124', nombre: 'Carwyn Fachtna', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 12, cedula: '1-5254-1124', nombre: 'Nehemiah Tatius', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 13, cedula: '1-5254-1124', nombre: 'Ebbe Gemariah', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 14, cedula: '1-5254-1124', nombre: 'Eustorgios Amulius', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 15, cedula: '1-5254-1124', nombre: 'Leopold Gáspár', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 16, cedula: '1-5254-1124', nombre: 'Pompeius René', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 17, cedula: '1-5254-1124', nombre: 'Paĉjo Jadon', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 18, cedula: '1-5254-1124', nombre: 'Micheal Mercurius', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 19, cedula: '1-5254-1124', nombre: 'Ganesha Dubhghall', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 20, cedula: '1-5254-1124', nombre: 'Hiroto Šimun', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 21, cedula: '1-5254-1124', nombre: 'Vishnu Serghei', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 22, cedula: '1-5254-1124', nombre: 'Zbyněk Phoibos', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 23, cedula: '1-5254-1124', nombre: 'Aulus Agmundr', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'},
  {codigo: 24, cedula: '1-5254-1124', nombre: 'Ford Prefect', email: 'ejemplo@gmail.com', tel1: '8080-1523', fax: '2215-3028', Celular: '8825-6354', contacto: '...', tipoProv: 'Tipo A', formaPagoDias: '45', limiteCredito: '500,000.00', dirección: '100 metros este de ...'}
]

export default suppliersData