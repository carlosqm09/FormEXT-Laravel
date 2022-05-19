<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="/css/styles.css" >

    <title>Formulario PHP</title>

</head>
<body>


    <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="favicon.ico" alt="" width="30" height="30" class="d-inline-block align-text-top">
                Registro de personas
              </a>
            </div>
    </nav>
    <div id="layout" class="mycontainer container-fluid px-5 py-5 ">
        <div class="row ">

              <div id="form" class="col-md-4 col-sm-12 ">
                  <form action="/person" method="POST" id="myform">
                    @csrf
                  <h2 class="form-label">Registrar nueva persona</h2>
                  <div class="mb-1">
                    <label  class="form-label">Nombre</label>
                    <input name="name" placeholder="example: Carlos" required type="text" class="form-control"  >
                    
                  </div>
                  <div class="mb-1">
                    <label class="form-label">Apellido Paterno</label>
                    <input name="lname1" placeholder="example: Quijada" required type="text" class="form-control"  >
                    
                  </div>
                  <div class="mb-1">
                    <label class="form-label">Apellido Materno</label>
                    <input name="lname2" placeholder="example: Medina" type="text" class="form-control"  >
                    
                  </div>
                  <div class="mb-1">
                    <label class="form-label">Direccion</label>
                    <input name="addr" placeholder="example: Calle 60" required type="text" class="form-control"  >
                    
                  </div>
                  <div class="mb-1">
                    <label class="form-label">Colonia</label>
                    <input name="nbhd" placeholder="example: Centro" required type="text" class="form-control"  >
                    
                  </div>
                  <div class="mb-1">
                    <label class="form-label">Codigo postal</label>
                    <input name="post" required placeholder="example: 97000" type="text" class="form-control"  >
                    
                  </div>
                  <div class="mb-1">
                    <label class="form-label">Telefono</label>
                    <input name="cel"  required placeholder="example: 9991234567" type="text" class="form-control"  >
                    
                  </div>
                  <div class="mb-1">
                    <label class="form-label">Email</label>
                    <input name="mail" required  placeholder="example: name@mail.com" type="email" class="form-control">
                    
                  </div>
                  <div class="mb-1">
                    <button type="submit" class="btn btn-success">Registrar</button>
                  </div>
                  </form> 
              </div>
              

              <div id="grid" class="col-md-8 col-sm-12 mygrid">
                <table class="table ">
                  <thead class="table-dark ">
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido paterno</th>
                      <th scope="col">Apellido materno</th>
                      <th scope="col">Dirección</th>
                      <th scope="col">Colonia</th>
                      <th scope="col">Codigo postal</th>
                      <th scope="col">Telefono</th>
                      <th scope="col">Correo</th>
                    </tr>
                  </thead>
                  <tbody id="tbody">
                    @foreach($people as $person)
                    <tr>
                        <td>{{$person->name}}</td>
                        <td>{{$person->lname1}}</td>
                        <td>{{$person->lname2}}</td>
                        <td>{{$person->addr}}</td>
                        <td>{{$person->nbhd}}</td>
                        <td>{{$person->post}}</td>
                        <td>{{$person->cel}}</td>
                        <td>{{$person->mail}}</td>
                    </tr>
                    @endforeach
                  </tbody>
                </table>
              </div>
        </div>
    </div>


</body>
</html>




