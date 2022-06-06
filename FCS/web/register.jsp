<%-- 
    Document   : register
    Created on : Jun 3, 2022, 9:05:18 PM
    Author     : longn
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <span id="error"></span>
        <form name="registerform" action="register" method="post" onsubmit="return checkSend()">
            <table width="40%">
                <tr><td>Email:</td>
                    <td><input type="text" id="username" name="username" 
                               placeholder="enter email"/>
                    </td>                    
                </tr>
                <tr><td><div id="divEmail"></div></td></tr>
                <tr><td>Password:</td>
                    <td><input type="password" id="pass" name="pass" 
                               placeholder="enter password"/>
                    </td>
                </tr>
                <tr><td>Confirm Password:</td>
                    <td><input type="password" id="repass" 
                               name="repass" 
                               placeholder="enter confirm password" />                    
                    </td>
                </tr>
                 <tr><td><div id="divcheckpass"></div></td></tr>
                <tr><td>Role:</td>
                    <td><input name="role" type="radio" value="2" checked/>user
                        <input name="role" type="radio" value="3" />seller
                    </td>
                </tr>
                <tr><td></td>
                    <td><input type="submit" value="Register Now" onclick="checkValidatorForRegister()"/>
                    </td></tr>
            </table>
        </form>
       <h2 style="color: red"> ${requestScope.error}</h2>
    </body>
     <script src="Validator.js"></script>
</html>
