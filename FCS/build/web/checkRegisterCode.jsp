<%-- 
    Document   : checkregister
    Created on : Jun 5, 2022, 1:05:53 AM
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
        <h1 style="color: blue">your authentication code was sent to your email.please input it to this form to complete register</h1>
        <form name="checkCode" action="checkReCode" method="post">
            <table width="40%">
                <tr><td>confirm code:</td>
                    <td><input type="number" id="recode" name="recode" 
                               placeholder="enter authentication code"/>
                    </td>                    
                </tr>
                <tr><td></td>
                    <td><input type="submit" value="Confirm" />
                    </td></tr>
            </table>
        </form>
        <h2 style="color: red"> ${requestScope.error}</h2>
    </body>
</html>
