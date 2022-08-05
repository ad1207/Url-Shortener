const Url = require("../models/Url")
const validUrl = require("valid-url")
const shortId = require("shortid")

module.exports.generateUrl = async (req,res,next) => {
    try{
        const {longUrl} = req.body;
        const baseUrl = process.env.URL
        if (!validUrl.isUri(baseUrl)) {
            return res.status(400).json({ message: "Invalid base url" });
          }
        if(validUrl.isUri(longUrl)){
            let url = await Url.findOne({ longUrl });
            if (url) {
                return res.status(201).json("Already exists");
            } 
            else {
                let urlCode = shortId.generate();
                let shortUrl = baseUrl + urlCode;
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });
                await url.save();
                return res.status(201).json(url);
                }
        }
        else{
            return res.status(400).json({ message: "Invalid url" });
        }        
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
} 

module.exports.search = async (req, res) => {
    try {
      const url = await Url.findOne({ urlCode: req.params.code });
   
      if (url) {
        return res.status(200).send(url.longUrl);
      } else {
        return res.status(404).json("No url found");
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json(err);
    }
};