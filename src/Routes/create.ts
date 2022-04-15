// create a new link

import { Router } from "express";
import validUrl from "valid-url";
import LinkSchema from "../Schemas/LinkSchema";

const router = Router();

router.post("/create", async (req, res) => {
  const link = req.body.link;

  if (validUrl.isUri(link)) {
    const shortUrlCode = Math.floor(Math.random() * 90000) + 10000;
    const newLink = new LinkSchema({
      longUrl: link,
      shortUrl: shortUrlCode,
      date: Date.now(),
    }).save();

    res.send({
      success: true,
      data: {
        message: "Successfully created new link!",
        code: 200,
        shortCode: shortUrlCode,
      },
    });
  } else {
    res.send({
      success: false,
      data: {
        message:
          "Invalid link was provided! Make sure it starts with https:// or http:// !",
        code: 400,
      },
    });
  }
});

export default router;
