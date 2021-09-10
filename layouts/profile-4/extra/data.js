import { ImageSourcePropType } from 'react-native';

export class Profile {

  constructor( firstName,
               lastName,
               photo,
               location,
               experience,
               description,
               followers,
               following,
               posts,
               height,
               weight) {
  }

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  static jenniferGreen() {
    return new Profile(
      'Jennifer',
      'Green',
      require('../assets/image-profile.jpg'),
      'Berlin, Germany',
      3,
      'Hi! My name is Jennifer. I’m 25 and I live in Berlin. I’m interested in computer science, music, sport and fantasy literature.',
      1500,
      86,
      116,
      174,
      48,
    );
  }
}
