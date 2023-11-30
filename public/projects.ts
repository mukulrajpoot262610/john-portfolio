const PROJECTS = [
  {
    id: 1,
    title: 'Heartbeat Classification in ECG Signals',
    summary:
      'Led a team of 2 and developed a model that combines the power of Continuous Wavelet Transform (CWT), Convolutional Neural Networks (CNN), and Long Short-Term Memory (LSTM) to effectively detect and classify different types of heartbeats in electrocardiogram (ECG) signals.',
    duration: null,
    technologies_used: ['Continuous Wavelet Transform', 'CNN', 'LSTM'],
    team_size: 2,
    image: 'heartbeat_classification.jpg',
  },
  {
    id: 2,
    title: 'Music Recommendation System',
    summary:
      "Led a team of 2 and developed a recommendation system employing collaborative filtering techniques, which analyzes and learns from users' previous listening behaviors to offer highly accurate song recommendations aligned with their preferences and optimize their future listening experiences.",
    duration: 'Aug 2021 – Dec 2021',
    technologies_used: ['Collaborative Filtering'],
    team_size: 2,
    image: 'music_recommendation_system.jpg',
  },
  {
    id: 3,
    title: 'Urban Sound Classification',
    summary:
      'Utilized the power of Deep Learning and leveraged the Librosa library to construct a model capable of accurately classifying environmental sounds, specifically identifying urban sounds. This innovative approach enables precise recognition and categorization of various urban soundscapes for enhanced analysis and understanding of urban environments.',
    duration: 'July 2021 – Aug 2021',
    technologies_used: ['Deep Learning', 'Librosa'],
    team_size: null,
    image: 'urban_sound_classification.jpg',
  },
  {
    id: 4,
    title: 'Mortality Predictions in ICU',
    summary:
      'Designed an Artificial Neural Network (ANN) model specifically tailored for predicting patient mortality in ICU settings.',
    duration: 'June 2021 – July 2021',
    technologies_used: ['Artificial Neural Network (ANN)'],
    team_size: null,
    image: 'mortality_predictions_icu.jpg',
  },
  {
    id: 5,
    title: 'Hostel Allocation System',
    summary:
      'Developed a dynamic website, leveraging HTML and CSS for the frontend, and Django for the backend, to facilitate the optimal pairing of roommates in hostels. Employed a robust stable matching algorithm to ensure that the resulting roommate assignments are stable, with no instances of mutual preference between roommates. The website provides a seamless and user-friendly experience for finding the best and most compatible roommates in hostel settings.',
    duration: 'Feb 2021 – May 2021',
    technologies_used: ['HTML', 'CSS', 'Django'],
    team_size: null,
    image: 'hostel_allocation_system.jpg',
  },
  {
    id: 6,
    title: 'Note Recognition in Audio Files',
    summary:
      'Led a team of 3 and designed a model employing signal processing algorithms to accurately identify and classify individual musical notes within an audio file based on their corresponding frequencies.',
    duration: 'July 2020 – Nov 2020',
    technologies_used: ['Signal Processing Algorithms'],
    team_size: 3,
    image: 'note_recognition_audio_files.jpg',
  },
];

export default PROJECTS;
