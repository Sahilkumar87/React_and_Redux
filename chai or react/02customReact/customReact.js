function customRender(reactElement, container){
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.childern
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement);

    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.childern
    for(const prop in ReactElement.props){
        if(prop === 'childern') continue; 
            domElement.setAttribute(prop.reactElement.props[prop])
        }
        container.appendChild(domElement)
}



const ReactElement = {
    type: 'a',
    props: {
        href: 'https:/google.com',
        target: '_blank'
    },
    childern: 'Click me to visit google'
}

const mainContainer = document.querySelector("#root");


customRender(ReactElement, mainContainer)

