import React, {Component} from 'react';


const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA'
const channelID = 'UC0ZTPkdxlAKf-V33tqXwi3Q'
const result = 20;


var youVidUrl= `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`



class Youtube extends Component {
      constructor(props){
              super(props);
              this.state = {
                    resulttv: []
              };
              this.clicked = this.clicked.bind(this);
      }
      clicked(){
         //console.log('clicked');
         fetch(youVidUrl)
                   .then((response) => response.json())
                   .then((responseJson) => {
                        //console.log(responseJson);
                      const resulttv = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
                      this.setState({resulttv});
                      console.log(this.state.resulttv);
            })
                  .catch((error) => {
                        console.error(error);
                  });
      }

      render(){
          //console.log(youVidUrl);
            return(
                  <div>
                      {
                        this.state.resulttv.map((link, i)=> {
                              console.log(link);
                              var frame = <div className="youtube">
                                                            <iframe key= {i}
                                                                           width="576" height="320"
                                                                           src={link}
                                                                           frameBorder="0"
                                                                           allowFullScreen>
                                                            </iframe>
                                                    </div>
                            {return frame}
                         })
                      }
                      {this.frame}

                          <button onClick={this.clicked}> Get Videos </button>
                  </div>
            );
      }
}

export default Youtube;
