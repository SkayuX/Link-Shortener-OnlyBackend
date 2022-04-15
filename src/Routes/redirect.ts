import { Router } from 'express';
import LinkSchema from '../Schemas/LinkSchema'
const router = Router();

router.get("/redirect/:code", async (req, res) => {

    if (req.params.code) {

        const doesExist = await LinkSchema.findOne({ shortUrl: req.params.code })

        if (doesExist) {
            res.redirect(doesExist.longUrl)
        } else {
            res.send("Invalid code!")
        }

    } else {
        res.send("Invalid code!")
    }

})

export default router;