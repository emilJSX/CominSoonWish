import { React, useState } from "react";
import { Image, Grid, Button } from "@mantine/core";
import { ComingSoonBody, Logo, Maintxt, Secondtxt, TextSection, İnputtxt, SubscribeForm, IconsSection, SubscribeText} from "./style/Home.Styled";
import logo from '../src/images/wish-x-white-logo.svg'
import screenfoto from '../src/images/coming-soon.png'
import { TextInput } from '@mantine/core';
import emailjs from 'emailjs-com'
import fb from '../src/images/facebook.svg'
import instagram from '../src/images/instagram.svg'
import twitter from '../src/images/twitter.svg'

  function App() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
      setIsActive(current => !current);
    }

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_j6hzsys', 'template_dp874pz', e.target, 'X6Q3LK-2tW-2Nuw8K')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset()
    };

  return (
    <ComingSoonBody fluid>
      <Logo>
        <Image src={logo} width={100} />
      </Logo>
      <Grid id="contain">
        <Grid.Col className="col-one" style={{ padding: "0px" }} span={5}>
          <Maintxt>Coming soon</Maintxt>
          <Secondtxt>your wishes will become true</Secondtxt>
          <İnputtxt className="input-txt">Inform when the website will be available</İnputtxt>
          <TextSection>
            <SubscribeForm onSubmit={sendEmail}>
              <TextInput placeholder="Your email" name="email" id="myInput" className="input-sect" />
            <Button onClick={handleClick} type="submit" style={{ display : isActive ? 'none' : 'block' }} className="btn">Subscribe</Button> 
            <SubscribeText  style={{display: isActive ? 'block' : 'none'}}>Thank you for subscribing! You will be the first to know about new releases! Stay tuned.</SubscribeText>
            </SubscribeForm>
          </TextSection>

        </Grid.Col>
        <Grid.Col span={6}>
          <Image id="img-class" src={screenfoto} />
        </Grid.Col>
      </Grid>
      <IconsSection>
        <Image id="soc-icons" src={fb} />
        <Image id="soc-icons" src={instagram} />
        <Image id="soc-icons" src={twitter} />
      </IconsSection>
    </ComingSoonBody>
  );
}


export default App;
