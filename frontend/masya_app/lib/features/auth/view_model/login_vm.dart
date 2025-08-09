import 'package:flutter/material.dart';
import '../services/auth.dart';
import 'package:firebase_auth/firebase_auth.dart';

class LoginViewModel extends ChangeNotifier {
  final AuthService _authService = AuthService();

  bool isLoading = false;
  String? error;

  Future<User?> loginWithEmail(String email, String password) async {
    try {
      isLoading = true;
      error = null;
      notifyListeners();

      final user = await _authService.loginWithEmail(email, password);
      return user;
    } catch (e) {
      error = e.toString();
      return null;
    } finally {
      isLoading = false;
      notifyListeners();
    }
  }

  Future<User?> loginWithGoogle() async {
    // try {
    //   isLoading = true;
    //   error = null;
    //   notifyListeners();

    //   final user = await _authService.signInWithGoogle();
    //   return user;
    // } catch (e) {
    //   error = e.toString();
    //   return null;
    // } finally {
    //   isLoading = false;
    //   notifyListeners();
    // }
  }

  Future<User?> loginWithFacebook() async {
    
    // try {
    //   isLoading = true;
    //   error = null;
    //   notifyListeners();

    //   final user = await _authService.signInWithFacebook();
    //   return user;
    // } catch (e) {
    //   error = e.toString();
    //   return null;
    // } finally {
    //   isLoading = false;
    //   notifyListeners();
    // }
  }
}
