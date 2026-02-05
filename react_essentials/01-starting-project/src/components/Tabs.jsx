 const Tabs =  ({children, buttons, ButtonsContainer = 'menu'}) => {
    //  const ButtonsContainer = buttonsContainer;

     return (
        <>
        <menu> 
              <ButtonsContainer>{buttons}  </ButtonsContainer>
            </menu>
           { children}
        </>
    )
}

export default Tabs;