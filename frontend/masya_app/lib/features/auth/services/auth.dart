import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:flutter_facebook_auth/flutter_facebook_auth.dart';

class AuthService {
  final _auth = FirebaseAuth.instance;

  Future<User?> loginWithEmail(String email, String password) async {
    try {
      final result = await _auth.signInWithEmailAndPassword(email: email, password: password);
      return result.user;
    } catch (e) {
      throw e.toString();
    }
  }

  // Future<User?> signInWithGoogle() async {
  //   final googleUser = await GoogleSignIn.instance();
  //   final googleAuth = await googleUser?.authentication;

  //   if (googleAuth == null) return null;

  //   final credential = GoogleAuthProvider.credential(
  //     accessToken: googleAuth.accessToken,
  //     idToken: googleAuth.idToken,
  //   );

  //   final result = await _auth.signInWithCredential(credential);
  //   return result.user;
  // }

  // Future<User?> signInWithFacebook() async {
  //   final result = await FacebookAuth.instance.login();
  //   if (result.status != LoginStatus.success) return null;

  //   final credential = FacebookAuthProvider.credential(result.accessToken!.token);
  //   final userCredential = await _auth.signInWithCredential(credential);
  //   return userCredential.user;
  // }
}
