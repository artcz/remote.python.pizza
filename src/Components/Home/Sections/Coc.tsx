import * as React from "react";

import "./Coc.css";

import Container, { Sizes } from "@/Components/Container";

export default () => (
  <section id="coc" className="coc">
    <Container size={Sizes.medium}>
      <h1>Code of conduct</h1>
      <h2>Purpose</h2>
      <p>
        Remote Python Pizza is dedicated to providing a harassment-free
        conference experience for everyone, regardless of gender, gender
        identity and expression, sexual orientation, disability, physical
        appearance, body size, race, age, religion or lack thereof.{" "}
      </p>
      <p>
        We do not tolerate harassment of conference participants in any form.
      </p>
      <p>
        Sexual language and imagery is not appropriate.
      </p>
      <p>
        We expect all community participants to abide by this Code of Conduct in
        all community as well as in all one-on-one
        communications pertaining to community business.
      </p>
      <p>
        <b>
          Conference participants violating these rules may be sanctioned or
          expelled from the conference without a refund at the discretion of the
          conference organisers.
        </b>
      </p>
      <h2>Expected Behavior</h2>
      <ul>
        <li>
          Participate in an authentic and active way. In doing so, you
          contribute to the health and longevity of this community.
        </li>
        <li> Exercise consideration and respect in your speech and actions.</li>
        <li> Attempt collaboration before conflict</li>
        <li> Use inclusive language</li>
        <li>
          {" "}
          Refrain from demeaning, discriminatory, or harassing behavior and
          speech.
        </li>
        <li>
          {" "}
          Be mindful of your surroundings and of your fellow participants.
        </li>
        <li>
          {" "}
          Alert community leaders if you notice a dangerous situation, someone
          in distress, or violations of this Code of Conduct, even if they seem
          inconsequential.
        </li>
      </ul>
      <h2>Unacceptable Behavior</h2>
      <p>Unacceptable behaviors include, but is not limited to:</p>
      <ul>
        <li>
          Abusive, discriminatory, derogatory or demeaning speech or actions
        </li>
        <li>Sexual images</li>
        <li>Harassing, intimidation, or stalking</li>
        <li>Sustained disruption of talks or other events</li>
        <li>Inappropriate online contact</li>
        <li>Invasion of personal space</li>
        <li>Unwelcome sexual attention</li>
        <li>Advocating for, or encouraging, any of the above behaviour</li>
      </ul>
      <h2>Consequences of Unacceptable Behavior</h2>
      <p>
        Unacceptable behavior from any community member, including sponsors and
        those with decision-making authority, will not be tolerated.
      </p>
      <p>
        Anyone asked to stop unacceptable behavior is expected to comply
        immediately. If a community member engages in unacceptable behavior, the
        community organizers may take any action they deem appropriate, up to
        and including a temporary ban or permanent expulsion from the community
        without warning (and without refund in the case of a paid event).
      </p>
      <br></br>
      <h2>If You Witness or Are Subject to Unacceptable Behavior</h2>
      <p>
        If you are subject to or witness unacceptable behavior, or have any
        other concerns, please notify a community organizer as soon as possible.
      </p>
      <p>
        We will publish during the conference information on where to make a
        report. Contact through Slack "@Christian Barra" or "@Darya" for 
        the communication any unacceptable behaviour.
      </p>

      <p>
        {" "}
        When taking a personal report, with your agreement, the staff members 
        may involve other event staff to ensure your report is managed properly.
        This report will remain private.
      </p>
      <p>
        During this private chat, we’ll ask you to tell us about what happened. 
        This can be upsetting, but we’ll handle it as respectfully as possible, 
        and you can bring someone to support you.
        You won’t be asked to confront anyone and we won’t tell anyone who you are.
      </p>
      <p>We value your attendance.</p>
      <h2>Anonymous report</h2>
      <p>
        You can make an anonymous report (we will publish a form for anonymous
        reports).
      </p>
      <p>
        We can’t follow up an anonymous report with you directly, but we will
        fully investigate it and take whatever action is necessary to prevent a
        recurrence
      </p>

      <h2>Addressing Grievances</h2>
      <p>
        If you feel you have been falsely or unfairly accused of violating this
        Code of Conduct, you should notify one of the event organizers with a
        concise description of your grievance.
      </p>
      <p>
        Your grievance will be handled in accordance with our existing governing
        policies.
      </p>

      <h2>Credits</h2>
      <p>
        This Code of Conduct was inspired by the{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://berlincodeofconduct.org/"
        >
          Berlin
        </a>{" "}
        and{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://2018.jsconf.eu/code-of-conduct/"
        >
          JS Conf
        </a>{" "}
        code of conducts.
      </p>
    </Container>
  </section>
);
