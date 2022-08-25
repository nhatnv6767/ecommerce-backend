const admin = require("../firebase")

exports.authCheck = async (req, res, next) => {
    // console.log(req.headers); // token
    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken);
    }catch (err) {
        res.status(401).json({
            err: "Invalid or expired token",
        })
    }
    next();
}