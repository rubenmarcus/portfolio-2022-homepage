import Typed from 'react-typed';

const options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 300
};

export const TypeText = () => {
  

        return   <Typed
        strings={[
            'Software Engineer',
            'Front-end Engineer',
            'React Developer',
            'Angular Developer',
            'Vue Developer',
            'TypeScript Developer',
            'Next.js Developer',
            'Node.js Developer',]}
            className="typed"
            typeSpeed={70}
            backSpeed={50}
            
            loop >
        </Typed>

   
}