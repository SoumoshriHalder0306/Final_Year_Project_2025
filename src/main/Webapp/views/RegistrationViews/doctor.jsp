<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .container {
            width: 450px;
            background-color: rgb(252, 252, 252);
            margin-left: 36%;
            text-align: center;
            border-radius: 22px;
            padding: 24px;
        }

        .input-box {
            border: 2px solid black;
            border-radius: 8px;
            width: 280px;
            font-size: 15px;
            margin-top: 40px;
            padding: 12px;

        }

        .input-boxx {
            border: 2px solid black;
            border-radius: 8px;
            width: 280px;
            font-size: 15px;
            margin-top: 40px;
            padding: 12px;
            display: none;
        }

        /* .show-cnt {
        background-color: aqua;
    } */

        p {
            color: black;
            margin-top: 30px;
            font-size: 20px;
        }

        .btn {
            width: 250px;
            height: 44px;
            background-color: aqua;
            color: black;
            border: none;
            font-size: 22px;
            border-radius: 25px;
            margin-top: 20px;
        }

        .btn:hover {
            border: 3px solid black;
            color: white;
            font-size: 20px;
            background-color: black;
            cursor: pointer;
        }

        h4 {
            font-size: 42px;
            color: aqua;
        }
    </style>
</head>

<body>
    <!-- <div class="home">
        <header class="header">
            <nav class="nav">
                <a href="#" class="nav_logo">LOGO</a>
                <ul class="nav_items">
                    <li class="nav_item">
                        <a href="#" class="nav_link">HOME</a>
                        <a href="#" class="nav_link">SERVICES</a>
                        <a href="#" class="nav_link">CONTACT</a>
                    </li>
                </ul>
                <button type="button" class="button" id="open">LOG IN</button>
            </nav>
        </header> -->

    <div class="home">
    <form action="/doctor/register-submit" method="post">
        <div class="container container_form">
            <h4>DOCTOR'S REGISTRATION </h4>

            <c:if test="${not empty ErrorMessage}">
            <h4 "style=color:red"> ${ErrorMessage} </h4>
            </c:if>

            <div>
                <input type="text" class="input-box" name="name" id="name" placeholder="enter your name " required>
            </div>
            <div>
                <input type="password" class="input-box" name="password" id="password" placeholder="enter your password " required>
            </div>
            <div>
                <input type="email" class="input-box" name="email" id="email" placeholder="enter your Email" required>
            </div>
            <div>
                <input type="text" class="input-box" name="specialization" id="specialization" placeholder="enter your specialization" required>
            </div>
           <!-- <div>
            <input type="file" class="input-box"  name="" id="" placeholder="enter your photo" required>
           </div> -->

            <div class="prees">
                <button class="btn" onclick="chk()">SUBMIT</button>
            </div>

        </div>
    </form>
    </div>
</body>

</html>