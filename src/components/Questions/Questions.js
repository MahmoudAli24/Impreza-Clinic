import Accordion from "react-bootstrap/Accordion";
import Container from "../../UI/Container";
import Paragraph from "../../UI/Paragraph";
import classes from "./Questions.module.css";
import Card from "../../UI/Card";
import { memo } from "react";

const questions = [
  {
    id: 1,
    title: "What are the pros or advantages of telemedicine?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id gravida magna neque, mauris laoreet. Ac lacus, maecenas aliquet elementum integer felis, ante.",
  },
  {
    id: 2,
    title: "What equipment do you require for telemedicine?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id gravida magna neque, mauris laoreet. Ac lacus, maecenas aliquet elementum integer felis, ante.",
  },
  {
    id: 3,
    title: "What is telemedicine used for?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id gravida magna neque, mauris laoreet. Ac lacus, maecenas aliquet elementum integer felis, ante.",
  },
  {
    id: 4,
    title: "What does telemedicine mean?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id gravida magna neque, mauris laoreet. Ac lacus, maecenas aliquet elementum integer felis, ante.",
  },
];
function Questions() {
  return (
    <section>
      <Container>
        <div className={classes.questions}>
          <div className={classes.questions__title}>
            <h2>Here are the Most Frequent Questions</h2>
            <Paragraph>
              User generated content in real-time will have multiple touchpoints
              for offshoring.
            </Paragraph>
          </div>
          <Card className={classes.questions__accordion}>
            <Accordion>
              {questions.map((question) => (
                <Accordion.Item
                  className={classes.accordion}
                  eventKey={question.id}
                  key={question.id}
                >
                  <Accordion.Header className={classes["accordion-head"]}>
                    {question.title}
                  </Accordion.Header>
                  <Accordion.Body className={classes["accordion-body"]}>
                    {question.description}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default memo(Questions);
