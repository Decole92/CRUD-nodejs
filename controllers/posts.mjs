
import {v4 as uuid} from 'uuid';


 let posts = [
    {
    "author": "Sam Shead",
    "title": "Bill Gates questions Elon Musk's goals with Twitter: 'He could make it worse' - CNBC",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107017517-1645200499603-gettyimages-1236298089-jm1_6693.jpeg?v=1651738132&w=1920&h=1080",
    
    "content": "Bill Gates has warned that Elon Musk could make Twitter \"worse\" after the Tesla CEO pledged to buy the social media firm for $44 billion.\r\nSpeaking at the Wall Street Journal's CEO Summit Wednesday, … [+3281 chars]",
    "id":uuid()
    },
    {
    "author": "Megan Henney",
    "title": "Fed's Powell calms recession jitters with rebuff of 75-basis point rate hike - Fox Business",
   
    "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/05/0/0/jerome-powell-2.jpg?ve=1&tl=1",
   
    "content": "Federal Reserve Chairman Jerome Powell alleviated some concerns of a looming economic recession after he rejected the possibility of an even larger interest rate hike than the one the U.S. central ba… [+4080 chars]",
    "id":uuid()
  },

]

export const getPosts = (req, res) => {
        res.send(posts);
    
}

export const createPosts = (req, res) => {
 
     const newPost = req.body;
        
         const postWithId = {...newPost, id:uuid()}
         posts.push(postWithId);
      
        res.send(`New Post Added to your Database with this author ${newPost.author}`);
}

export const getPost = (req, res) => {

    const { id } = req.params;

    const foundPost = posts.find((post) => post.id === id);

    res.send(foundPost);

}



  export const updatePost = (req, res) => {

  const { id } = req.params;

  const { author, title, content, urlToImage } = req.body;

  const post = posts.find((post) => post.id === id);

  if(author) post.author = author;

  if(title) post.title = title;

  if(content) post.content = content;

  if(urlToImage) post.urlToImage = urlToImage;

  res.send(`The Post ID ${id} has been Updated`);

  }


export const deletePost = (req, res) => {

   
      const { id } = req.params;
      
      
      posts = posts.filter((post) => post.id !== id);
      
      
      res.send(`deleted post with id ${id}`);
      
      

      }
