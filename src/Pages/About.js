import React from 'react'
import '../styles/Aboutcss.css'
import developer from '../photo/developer.jpg'
function About() {
    return (
        <div className='all-about'>
            <div className='about-details'>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, ipsa maiores. Distinctio culpa doloremque sint quos repudiandae cum ducimus, eligendi, cumque blanditiis officia, ipsa eum quaerat voluptatem expedita vitae nam!</p>
            </div>
            <section class="articles">
                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img src={developer} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>Developer <span>:SG Jonh</span></h2>
                            <p>
                                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                            </p>
                            <a href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                <article>

                    <div class="article-wrapper">
                        <figure>
                            <img src={developer} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>Desingner</h2>
                            <p>
                                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                            </p>
                            <a href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                <article>

                    <div class="article-wrapper">
                        <figure>
                            <img src={developer} alt="" />
                        </figure>
                        <div class="article-body">
                            <h2>Manager</h2>
                            <p>
                                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                            </p>
                            <a href="#" class="read-more">
                                Read more <span class="sr-only">about this is some title</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
               
            </section>
        </div>
    )
}

export default About