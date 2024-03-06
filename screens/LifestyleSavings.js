import WebView from "react-native-webview";
function LifestyleSavings() {
    const customStyles = `
            body{
                background: 'red';
            }
            #masthead,#masthead_nav,#header,#footer_links{
                display: none;
            }
    `
    const injectStyles = `
            const styles = document.createElement('style');
            styles.innerHTML=\``+ customStyles + `\`;
            document.querySelector('body').appendChild(styles);
    `
  return <WebView source={{uri: "https://www.payeee-rewards.co.uk/index.php"}}
  injectedJavaScript={injectStyles}
  />;
}

export default LifestyleSavings;
