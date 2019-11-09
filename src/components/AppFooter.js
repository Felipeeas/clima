import React, {Component} from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';



class AppFooter extends Component {
    render() {
        
        return (
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Seu app climático</Text>
            </Button>
          </FooterTab>
        </Footer>
        )
    }
}




export default AppFooter