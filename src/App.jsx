const App=()=> (
    <>
        <div className="root">
            <div className="container">
                <div className="name-container">
                    Harsh Maheshwari
                </div>
                <div className="image-container">
                    <img className="image-profile" alt={"harsh-m-head-shot"} src={"/images/hmac.jpg"}/>
                </div>
                <div className="description">
                    <p>
                        Hey I'm Harsh, people also call me HMac. I love creating interactive User interfaces and I'm fascinated by the concept of
                        micro-interactions.
                    </p>
                    <p>
                        When I'm not building awesome UIs, I love to travel and take pictures and eat.
                    </p>
                    <p>
                        I would love to learn more about Modern web architecture and would try and learn about Micro
                        Frontends, Web 3.0 and creating themeable apps.
                    </p>
                </div>
                <div className="github-link">
                    <a href="https://github.com/HRSHDG8">Check out my github profile</a>
                </div>
            </div>
        </div>
    </>
);

ReactDOM.render(<App/>, document.getElementById("root"));
