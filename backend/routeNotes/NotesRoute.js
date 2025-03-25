import express from "express"
import { createNotes,getNotes,getNotesById,updateNotes,deleteNotes } from "../controller/noteController.js"

const router = express.Router();

router.get("/notes",getNotes)
router.get("/notes/:id",getNotesById)
router.post("/add-notes",createNotes)
router.patch("/edit-notes/:id",updateNotes)
router.delete("/delete-notes/:id",deleteNotes)

export default router