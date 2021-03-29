import React from "react";
import AllResults from "../resultsComponent/AllResults";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Button } from "react-bootstrap";

const theme = {
  background: "#000000",
  headerBgColor: "#000000",
  headerFontColor: "#000000",
  headerFontSize: "15px",
  botBubbleColor: "#000000",
  botFontColor: "#fff",
  userBubbleColor: "#000000",
  userFontColor: "#fff",
  fontFamily: "Noto Sans JP",
};
class ChatbotPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.setState({ result: this.props.result });
  }
  handleClick() {
    this.setState({ clicked: true });
  }
  render() {
    const genresCount = this.props.result.genres;
    const views = this.props.result.views;
    const viewCounts = this.props.result.viewcount;
    const resultsArr = Object.entries(genresCount);
    const hoursArr = Object.entries(viewCounts);
    const sorted = resultsArr.sort((a, b) => b[1] - a[1]);
    const viewsArr = Object.entries(views);
    const viewsSorted = viewsArr.sort((a, b) => b[1] - a[1]);
    const totalEpisodes = hoursArr
      .map((dateHour) => dateHour[1])
      .reduce((a, b) => a + b, 0);
    const steps = [
      {
        id: "1",
        message: "Hi, I'm an A.I. trained to evaluate Netflix taste.",
        trigger: "2",
        delay: 3000,
      },
      {
        id: "2",
        message:
          "Listen... I have been looking at your Netflix viewing history and um...",
        trigger: "3",
        delay: 3000,
      },
      {
        id: "3",
        message: "...it’s something.",
        trigger: "4",
        delay: 3000,
      },

      {
        id: "4",
        message: `I saw  ${sorted[0][1]} ${sorted[0][0]} shows...
        Also, did you really watch ${viewsSorted[0][1]} episodes of ${viewsSorted[0][0]}?`,
        trigger: "5",
        delay: 4000,
      },
      {
        id: "5",
        options: [
          {
            value: 1,
            label: "Yes.",
            trigger: "6",
          },
          {
            value: 2,
            label: "No.",
            trigger: "8",
          },
          {
            value: 3,
            label: "I share this profile with someone else.",
            trigger: "8",
          },
        ],
      },
      {
        id: "6",
        message: "Like ironically?",
        trigger: "7",
        delay: 2000,
      },
      {
        id: "7",
        options: [
          {
            value: 1,
            label: "Lol yea.",
            trigger: "8",
          },
          {
            value: 2,
            label: "No...",
            trigger: "9",
          },
        ],
      },
      {
        id: "8",
        message: `I can tell you are the type to run away from your responsibilities and problems based on how others view you.`,
        trigger: "10",
        delay: 4000,
      },
      {
        id: "9",
        message: "Look i'm just a neural net do what you gotta do",
        trigger: "10",
        delay: 3000,
      },
      {
        id: "10",
        message: `You watched ${totalEpisodes} episodes of Netflix shows.`,
        trigger: "11",
        delay: 3000,
      },
      {
        id: "11",
        message: `Switching topics entirely, how’s your social life?`,
        trigger: "12",
        delay: 4000,
      },
      {
        id: "12",
        options: [
          { value: 1, label: "What do you think?", trigger: "13" },
          { value: 2, label: "I have friends.", trigger: "14" },
        ],
      },
      {
        id: "13",
        message: `Got it.`,
        trigger: "15",
        delay: 3000,
      },
      {
        id: "14",
        message: `Not F.R.I.E.N.D.S., but /real/ friends.`,
        trigger: "15",
        delay: 3000,
      },
      {
        id: "15",
        message: `Friends are important.`,
        trigger: "16",
        delay: 3000,
      },
      {
        id: "16",
        message: `But not as important as my opinion.`,
        trigger: "17",
        delay: 3000,
      },
      {
        id: "17",
        message: `Ready to face your truth?`,
        trigger: "18",
        delay: 3000,
      },

      {
        id: "18",
        component: (
          <div style={{ color: "black" }}>
            <Button
              type="button"
              className="btn btn-danger btn-lg btn-block"
              onClick={this.handleClick}
            >
              Get your results!
            </Button>
          </div>
        ),
        end: true,
        delay: 3000,
      },
    ];
    return this.state.clicked ? (
      <AllResults result={this.state.result} />
    ) : (
      <div>
        <ThemeProvider theme={theme}>
          <ChatBot
            steps={steps}
            width="1200px"
            height="1000px"
            placeholder=" "
            hideBotAvatar="true"
            hideHeader="true"
            hideUserAvatar="true"
            hideInput="true"
            delay="20"
            userDelay="2000"
            bubbleStyle={{ fontSize: "18px" }}
            bubbleOptionStyle={
              ({ fontSize: "20px" }, { background: "#ffffff50" })
            }
          />
        </ThemeProvider>
      </div>
    );
  }
}
export default ChatbotPage;
