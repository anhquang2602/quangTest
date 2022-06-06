/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;
import model.Account;

/**
 *
 * @author HOANG LONG
 */
public class AccountDAO extends DBContext {

    public Account getAccount(String user, String pass) {
        String sql = "select * from account where username=? and password=?";
        PreparedStatement st;
        try {
            st = connection.prepareStatement(sql);
            st.setString(1, user);
            st.setString(2, pass);
            ResultSet rs = st.executeQuery();
            if (rs.next()) {
                return new Account(user, pass, rs.getInt(3));
            }
        } catch (SQLException ex) {
            Logger.getLogger(AccountDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }

    public boolean exsitedAccount(String username) {
        String sql = "select * from account where username=?";
        PreparedStatement st;
        try {
            st = connection.prepareStatement(sql);
            st.setString(1, username);

            ResultSet rs = st.executeQuery();
            if (rs.next()) {
                return true;
            }
        } catch (SQLException ex) {
            Logger.getLogger(AccountDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }

    public void insert(Account a) {
        String sql = "insert into account values(?,?,?)";
        try {
            PreparedStatement st = connection.prepareStatement(sql);
            st.setInt(1, a.getRoleId());
            st.setString(2, a.getUsername());
            st.setString(3, a.getPassword());    
            st.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e);
        }
    }
    
    public Account checkLogin(String user, String pass) {
        String sql = "select * from account where username=? and password=?";
        PreparedStatement st;
        try {
            st = connection.prepareStatement(sql);
            st.setString(1, user);
            st.setString(2, pass);
            ResultSet rs = st.executeQuery();
            if (rs.next()) {
                return new Account(user, pass, rs.getInt(2));
            }
        } catch (SQLException ex) {
            Logger.getLogger(AccountDAO.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }

}
