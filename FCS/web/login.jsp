<%-- 
    Document   : Login
    Created on : May 25, 2020, 10:48:23 PM
    Author     : HOANG LONG
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Login</h1>
        <form name="loginform" action="login" method="post" onsubmit="return checkSend()">
            Enter UserName:<input type="text" name="username"/><br/>
            <div id="divEmail"></div>
            Enter Password:<input type="password" name="password"/><br/>
            <input type="submit" value="Login" onclick="checkValidatorForLogin()"/>
        </form>
        <h2 style="color: red"> ${error}</h2>
    </body>
    <script src="Validator.js"></script>
</html>
