import React from 'react';
import './App.css';

class App2 extends React.Component {
  render (){
    return (
  <div className="App">
	<header id="home">
		<div className="bg-img" style={{backgroundImage: "url('./img/background01.jpg')"}}>
			<div className="overlay"></div>
		</div>

		<div className="home-wrapper">
			<div className="container">
				<div className="row">

					<div className="col-md-10 col-md-offset-1">
						<div className="home-content">
							<h1 className="white-text">We Provide Privacy</h1>
							<p className="white-text">A hybrid-encrypted p2p VOIP
							</p>
						</div>
					</div>

				</div>
			</div>
		</div>

	</header>

	<div id="about" className="section md-padding">

		<div className="container">

			<div className="row">

				<div className="section-header text-center col-md-12">
					<h2 className="title">What are the problems?</h2>
				</div>
				<div className="col-md-4">
					<div className="about">
						<i className="fa fa-shield-alt"></i>
						<h3>Data Security</h3>
						<p>How to ensure that our data is secure?</p>
						</div>
				</div>

				<div className="col-md-4">
					<div className="about">
						<i className="fa fa-user-check"></i>
						<h3>Server Holder Inspection</h3>
						<p>Who is going to insoect what is going on server with our data?</p>
						</div>
				</div>

        <div className="col-md-4">
					<div className="about">
						<i className="fa fa-key"></i>
						<h3>Security of our Keys</h3>
						<p>Our keys are stored in their servers, are they secure?</p>
						</div>
				</div>

        <div className="col-md-4">
					<div className="about">
						
            <i className="fas fa-exclamation-triangle"></i>
						<h3>Misuse of Data</h3>
						<p>How our data used by their servers?</p>

					</div>
				</div>

        <div className="col-md-4">
				</div>

        <div className="col-md-4">
					<div className="about">
						<i className="fa fa-bug"></i>
						<h3>Hackers</h3>
						<p>Network which transfers keys are hackable or not?</p>
						</div>
				</div>

			</div>

		</div>

	</div>


	<div id="portfolio" className="section md-padding bg-grey">

		<div className="container">

			<div className="row">

				<div className="section-header text-center col-md-12">
					<h2 className="title">Featured Works</h2>
				</div>

				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="./img/work1.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Category</span>
						<h3>Lorem ipsum dolor</h3>
						<div className="work-link">
							<a className="lightbox" href="./img/work1.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="./img/work2.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Category</span>
						<h3>Lorem ipsum dolor</h3>
						<div className="work-link">
							<a className="lightbox" href="./img/work2.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="./img/work3.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Category</span>
						<h3>Lorem ipsum dolor</h3>
						<div className="work-link">
							<a className="lightbox" href="./img/work3.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="./img/work4.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Category</span>
						<h3>Lorem ipsum dolor</h3>
						<div className="work-link">
							<a className="lightbox" href="./img/work4.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>
				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="./img/work5.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Category</span>
						<h3>Lorem ipsum dolor</h3>
						<div className="work-link">
							<a className="lightbox" href="./img/work5.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-xs-6 work">
					<img className="img-responsive" src="./img/work6.jpg" alt="" />
					<div className="overlay"></div>
					<div className="work-content">
						<span>Category</span>
						<h3>Lorem ipsum dolor</h3>
						<div className="work-link">
							<a className="lightbox" href="./img/work6.jpg"><i className="fa fa-search"></i></a>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>


	<div id="testimonial" className="section md-padding">

		<div className="bg-img" style={{backgroundImage: "url('./img/background3.jpg')"}}>
			<div className="overlay">
      <div className="about">
        <h1 className="white-text">You need safety and security, whether it's on road or on call</h1>
      </div>
      </div>
		</div>

		<div className="container">

			<div className="row">

				<div className="col-md-10 col-md-offset-1">
					<div id="testimonial-slider" className="owl-carousel owl-theme">

						<div className="testimonial">
							<div className="testimonial-meta">
								<img src="./img/perso1.jpg" alt="" />
								<h3 className="white-text">Gurpreet Singh</h3>
							</div>
							<p className="white-text">Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.</p>
						</div>

						<div className="testimonial">
							<div className="testimonial-meta">
								<img src="./img/perso2.jpg" alt="" />
								<h3 className="white-text">John Doe</h3>
								<span>Web Designer</span>
							</div>
							<p className="white-text">Molestie at elementum eu facilisis sed odio. Scelerisque in dictum non consectetur a erat. Aliquam id diam maecenas ultricies mi eget mauris.</p>
						</div>

					</div>
				</div>

			</div>

		</div>

	</div>

  <div id="blog" className="section md-padding bg-grey">

		<div className="container">

			<div className="row">

				<div className="section-header text-center col-md-12">
					<h2 className="title col-md-12">Sample Videos</h2>
				</div>

				<div className="col-md-6">
          <video width="500" height="320" controls>
          <source src="/presentation.mp4" type="video/mp4" />
          </video>
				</div>

        <div className="col-md-6">
          <video width="500" height="320" controls>
          <source src="/presentation.mp4" type="video/mp4" />
          </video>
				</div>

			</div>

		</div>

	</div>



	<div id="team" className="section md-padding">

		<div className="container">

			<div className="row">

				<div className="section-header text-center col-md-12">
					<h2 className="title">Our Team</h2>
          <br />
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive" src="./img/team1.jpg" alt="" />
							<div className="overlay">
								<div className="team-social">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-google-plus"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
								</div>
							</div>
						</div>
						<div className="team-content">
							<h3>Gurpreet Singh</h3>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive" src="./img/team2.jpg" alt="" />
							<div className="overlay">
								<div className="team-social">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-google-plus"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
								</div>
							</div>
						</div>
						<div className="team-content">
							<h3>Nimish Khurana</h3>
						</div>
					</div>
				</div>

				<div className="col-sm-4">
					<div className="team">
						<div className="team-img">
							<img className="img-responsive" src="./img/team3.jpg" alt="" />
							<div className="overlay">
								<div className="team-social">
									<a href="#"><i className="fa fa-facebook"></i></a>
									<a href="#"><i className="fa fa-google-plus"></i></a>
									<a href="#"><i className="fa fa-twitter"></i></a>
								</div>
							</div>
						</div>
						<div className="team-content">
							<h3>Harsh Bansal</h3>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>



	<footer id="footer" className="sm-padding bg-dark">

		<div className="container">

			<div className="row">

				<div className="col-md-12">

					<div className="footer-logo">
						<h1 className="white-text">ALGOEXPERTS</h1>
            <button className="white-btn"><a href="/signin">Sign In</a></button>
            <button className="white-btn"><a href="/signup">Sign Up</a></button>
					</div>
				</div>

			</div>

		</div>

	</footer>

	<div id="back-to-top"></div>

	<div id="preloader">
		<div className="preloader">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
      </div>
    );
  }
}

export default App2;
