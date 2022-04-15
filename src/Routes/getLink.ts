// create route for getting the link by frontend

import { Router } from 'express';
import LinkSchema from '../Schemas/LinkSchema'

const router = Router();

router.get("/get/:id", async (req, res) => {

    const id = req.params.id;

    if (id) {
        const doesExist = await LinkSchema.findOne({ shortUrl: id });

        if (doesExist) {
            res.send({ success: true, data: { longUrl: doesExist.longUrl, shortUrl: doesExist.shortUrl ,code: 200 } });
        } else {
            res.send({ success: false, data: { message: "No link was found", code: 404 } });
        }
    } else {
        res.send({ success: false, data: { message: "No link was provided", code: 400 } });
    }

})

export default router;