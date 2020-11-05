/*Declaration of laptops and list */

export const featuredLaptops = [];

const acer = new Laptop("Acer Predator", 17490, "Equipped with the tenth generation's Core i7- processor and forceful Geforce RTX 2060, this gaming computer will maximise your games.","Features i7 processer from intel, 16GB RAm, Nvidia GeForce RTX 2060 and 1 TB SSD.","public/images/acer.webp");
const asus = new Laptop("Asus",14990 ,"A laptot for gaming which suits passionated players who wants a reliable computer on the long term, equipped with technology such as the 7th generation AMD Ryzen processor and Nvidia Geforce RTX 2060."," Features a GeForce GTX 2060, Ryzen 7, 16gb RAM, 512 SSD and Windows 10 Home." ,"public/images/asus.webp");
const hp = new Laptop("HP ProBook", 11490, "This reliable HP ProBook has full functionality and offers important commersial functions for a recent price.","Features a Intel Core i7, 8GB RAM, 256 GB SSD and Windows 10 PRO.",  "public/images/hpprobook.webp");
const lenovo = new Laptop("Lenovoa IdeaPad",7990 ,"It has everything you need with a powerful combination of performance, design and connection possibilites.", "It features a Ryzen 5,8GB RAM, and 512GB SSD.", "public/images/lenovo.webp");

/* Constructor for Laptop*/
function Laptop(name, price, description, featureList, imageUrl){
    this.name = name;
    this.price = price;
    this.description = description;
    this.featureList = featureList;
    this.imageUrl = imageUrl;
}

/*Adding laptops to the featuredLaptop list */

featuredLaptops.push(acer);
featuredLaptops.push(asus);
featuredLaptops.push(hp);
featuredLaptops.push(lenovo);