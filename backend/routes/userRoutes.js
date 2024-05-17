import express from 'express';
const router = express.Router();
import { 
  authUser,
  deleteUserProfile,
  registerUser,
  logoutUser,
  getUserProfile,
  UpdateUserProfile
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/', registerUser);
router.delete('/', deleteUserProfile);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, UpdateUserProfile);


export default router;