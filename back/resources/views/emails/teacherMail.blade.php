<!DOCTYPE html>
<html>
<head>
    <title>PNC Student Follow Up Management System</title>
</head>

<body>
    <div style="margin:auto;background-color:#eeee;padding:20px; width:75%;">
        <div style="background-color:white;padding:5px;text-align:center;">
            <img style="width: 20%;" src="https://o.remove.bg/downloads/ad76db0b-6971-4178-b806-64a3326f4ad2/366-3666562_passerelles-numeriques-cambodia-hd-png-download-removebg-preview.png" alt="">
        </div>
        <div style="background-color:#45AAF3;text-align:center;padding:10px;color:white;">
            <h1 class="">Student Follow Up Management System </h1>
        </div>
        <div style="background-color:white;padding:50px;">
            <h3> Dear Mr. {{$data["first_name"]}} ! You are created in PNC teachers list</h3>
            <h3>Your email: <strong>{{$data["email"]}}</strong></h3>
            <h3>Your password are: <strong>123456789</strong></h3>
            <div >
                <h4>Click on here for more: </h4>
                <a href="http://localhost:8080" style="text-decoration: none;"> 
                    <button style="background-color:#45AAF3;padding: 10px 50px;color: white;border-radius: 10px; border:none;"> GET MORE</button> 
                </a>
            </div>
        </div>
    </div>
</body>
</html>