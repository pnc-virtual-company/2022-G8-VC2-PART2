<!DOCTYPE html>
<html>
<head>
    <title>Laravel 9 Create PDF File using DomPDF Tutorial - Mywebtuts.com</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>

    <!-- <h1>{{ $title }}</h1> -->

    <p>{{ $date }}</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</p>
  
    <table class="table table-bordered">
        <tr>
            <th>ID</th>
            <th>First_name</th>
            <th>Last_name</th>
            <th>role</th>
            <th>gender</th>
            <th>Email</th>
        </tr>
        @foreach($users as $user)
            @if ($user->role==1)
            <tr >
                <td>{{ $user->id }}</td>
                <td>{{ $user->first_name }}</td>
                <td>{{ $user->last_name }}</td>
                <td>{{ $user->role }}</td>
                <td>{{ $user->gender }}</td>
                <td>{{ $user->email }}</td>
            </tr>
            @endif
        @endforeach
    </table>
<button>DONWLOAD</button>
</body>
</html>