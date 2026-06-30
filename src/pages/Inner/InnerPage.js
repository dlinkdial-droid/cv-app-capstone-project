import React from "react";
import Panel from "../../components/Panel/Panel";
import Box from '../../components/Box/Box';
import BackToTop from "../../components/BackToTop/BackToTop";
import TimeLine from "../../components/TimeLine/TimeLine";
import Expertise from '../../components/Expertise/Expertise';
import Portfolio from "../../components/Portfolio/Portfolio";
import Address from "../../components/Address/Address";
import Feedback from '../../components/Feedback/Feedback';
import reporterAvatar from '../../assets/images/reporter_img.png';

import "./InnerPage.scss";

const Inner = () => {
    const expertiseMockData = [
        {
            date: "2013-2014",
            info: {
                company: "Google",
                job: "Front-end developer / php programmer",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
            }
        },
        {
            date: "2012",
            info: {
                company: "Twitter",
                job: "Web developer",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
            }
        }
    ];

    const feedbackData = [
        {
            feedback: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
            reporter: {
                photoUrl: reporterAvatar,
                name: "John Doe",
                citeUrl: "https://www.citeexample.com"
            }
        },
        {
            feedback: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
            reporter: {
                photoUrl: reporterAvatar,
                name: "John Doe",
                citeUrl: "https://www.citeexample.com"
            }
        }
    ];

    return (
        <div className="inner-page">
            <Panel />

            <main className="inner-page__content">
                <section id="about" className="inner-page__section">
                    <Box />
                </section>

                <section id="education" className="inner-page__section">
                    <TimeLine />
                </section>

                <section id="experience" className="inner-page__section">
                    <Expertise title="Experience" data={expertiseMockData} />
                </section>

                <section id="portfolio" className="inner-page__section">
                    <Portfolio />
                </section>

                <section id="contacts" className="inner-page__section">
                    <Address />
                </section>

                <section id="feedbacks" className="inner-page__section">
                    <Feedback title="Feedbacks" data={feedbackData} />
                </section>
            </main>

            <BackToTop />
        </div>
    );
};

export default Inner;