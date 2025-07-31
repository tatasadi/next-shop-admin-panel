const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
// const { uploadFile } = require("../../utils/multer");
const { verifyAccessToken } = require("../http/middlewares/user.middleware");
const {
  UserAuthController,
} = require("../http/controllers/user/user.controller");

router.post("/get-otp", expressAsyncHandler(UserAuthController.getOtp));
router.post("/check-otp", expressAsyncHandler(UserAuthController.checkOtp));
router.post(
  "/complete-profile",
  verifyAccessToken,
  expressAsyncHandler(UserAuthController.completeProfile)
);
router.get(
  "/refresh-token",
  expressAsyncHandler(UserAuthController.refreshToken)
);
router.patch(
  "/update",
  verifyAccessToken,
  expressAsyncHandler(UserAuthController.updateProfile)
);

// router.post(
//   "/upload-avatar",
//   verifyAccessToken,
//   uploadFile.single("avatar"),
//   expressAsyncHandler(UserAuthController.updateAvatar)
// );
router.get(
  "/profile",
  verifyAccessToken,
  expressAsyncHandler(UserAuthController.getUserProfile)
);

router.post("/logout", expressAsyncHandler(UserAuthController.logout));

// Test endpoint for creating users (development only)
router.post("/create-test-user", expressAsyncHandler(UserAuthController.createTestUser));

module.exports = {
  userAuthRoutes: router,
};
