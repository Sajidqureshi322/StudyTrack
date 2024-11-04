import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryList from './CategoryList';
import FolderList from './FolderList';
import QuizSection from './QuizSection';
import Breadcrumb from './Breadcrumb'; 


const Aptitude = () => {
  const navigate = useNavigate();
  const categories = [
    {
      name: 'Arithmetic Aptitude',
      description: 'Arithmetic practice and concepts.',
      folders: {
        'Problems on Trains': [
          {
            question: 'A train 100 m long crosses a platform 200 m long in 10 seconds. Find the speed of the train.',
            options: ['36 km/h', '54 km/h', '72 km/h', '108 km/h'],
            correctAnswer: '36 km/h',
          },
          {
            question: 'If a car travels 120 km in 2 hours, what is its speed?',
            options: ['60 km/h', '70 km/h', '80 km/h', '90 km/h'],
            correctAnswer: '60 km/h',
          },
          {
            question: 'A train 100 m long crosses a platform 200 m long in 10 seconds. Find the speed of the train.',
            options: ['36 km/h', '54 km/h', '72 km/h', '108 km/h'],
            correctAnswer: '36 km/h',
          },
          {
            question: 'If a car travels 120 km in 2 hours, what is its speed?',
            options: ['60 km/h', '70 km/h', '80 km/h', '90 km/h'],
            correctAnswer: '60 km/h',
          },
          {
            question: 'A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?',
            options: ['120 metres', '180 metres', '324 metres', '150 metres'],
            correctAnswer: '150 metres',
          },
          {
            question: 'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:',
            options: ['45 km/hr', '50 km/hr', '54 km/hr', '55 km/hr'],
            correctAnswer: '54 km/hr',
          },
          {
            question: 'The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:',
            options: ['200 m', '225 m', '245 m', '250 m'],
            correctAnswer: '245 m',
          },
          {
            question: 'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
            options: ['1 : 3', '3 : 2', '3 : 4', 'None of these'],
            correctAnswer: '3 : 2',
          },
          {
            question: 'A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?',
            options: ['120 m', '240 m', '300 m', 'None of these'],
            correctAnswer: '240 m',
          },
          {
            question: 'A train 100 m long crosses a platform 200 m long in 10 seconds. Find the speed of the train.',
            options: ['36 km/h', '54 km/h', '72 km/h', '108 km/h'],
            correctAnswer: '36 km/h',
          },
          {
            question: 'If a car travels 120 km in 2 hours, what is its speed?',
            options: ['60 km/h', '70 km/h', '80 km/h', '90 km/h'],
            correctAnswer: '60 km/h',
          },
          {
            question: 'A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?',
            options: ['120 metres', '180 metres', '324 metres', '150 metres'],
            correctAnswer: '150 metres',
          },
          {
            question: 'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:',
            options: ['45 km/hr', '50 km/hr', '54 km/hr', '55 km/hr'],
            correctAnswer: '54 km/hr',
          },
          {
            question: 'The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:',
            options: ['200 m', '225 m', '245 m', '250 m'],
            correctAnswer: '245 m',
          },
          {
            question: 'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
            options: ['1 : 3', '3 : 2', '3 : 4', 'None of these'],
            correctAnswer: '3 : 2',
          },
          {
            question: 'A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?',
            options: ['120 m', '240 m', '300 m', 'None of these'],
            correctAnswer: '240 m',
          },
          {
            question: 'A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?',
            options: ['65 sec', '89 sec', '100 sec', '150 sec'],
            correctAnswer: '89 sec',
          },
          {
            question: 'Two trains of equal length are running on parallel lines in the same direction at 46 km/hr and 36 km/hr. The faster train passes the slower train in 36 seconds. The length of each train is:',
            options: ['50 m', '72 m', '80 m', '82 m'],
            correctAnswer: '80 m',
          },
          {
            question: 'A train 360 m long is running at a speed of 45 km/hr. In what time will it pass a bridge 140 m long?',
            options: ['40 sec', '42 sec', '45 sec', '48 sec'],
            correctAnswer: '40 sec',
          },
          {
            question: 'Two trains are moving in opposite directions @ 60 km/hr and 90 km/hr. Their lengths are 1.10 km and 0.9 km respectively. The time taken by the slower train to cross the faster train in seconds is:',
            options: ['36', '45', '48', '49'],
            correctAnswer: '48',
          },
          {
            question: 'A jogger running at 9 kmph alongside a railway track in 240 metres ahead of the engine of a 120 metres long train running at 45 kmph in the same direction. In how much time will the train pass the jogger?',
            options: ['3.6 sec', '18 sec', '36 sec', '72 sec'],
            correctAnswer: '36 sec',
          },
          {
            question: 'A train 100 m long crosses a platform 200 m long in 10 seconds. Find the speed of the train.',
            options: ['36 km/h', '54 km/h', '72 km/h', '108 km/h'],
            correctAnswer: '36 km/h',
          },
          {
            question: 'If a car travels 120 km in 2 hours, what is its speed?',
            options: ['60 km/h', '70 km/h', '80 km/h', '90 km/h'],
            correctAnswer: '60 km/h',
          },
          {
            question: 'A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?',
            options: ['120 metres', '180 metres', '324 metres', '150 metres'],
            correctAnswer: '150 metres',
          },
          {
            question: 'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:',
            options: ['45 km/hr', '50 km/hr', '54 km/hr', '55 km/hr'],
            correctAnswer: '54 km/hr',
          },
          {
            question: 'The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:',
            options: ['200 m', '225 m', '245 m', '250 m'],
            correctAnswer: '245 m',
          },
          {
            question: 'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
            options: ['1 : 3', '3 : 2', '3 : 4', 'None of these'],
            correctAnswer: '3 : 2',
          },
          {
            question: 'A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?',
            options: ['120 m', '240 m', '300 m', 'None of these'],
            correctAnswer: '240 m',
          },
          {
            question: 'A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?',
            options: ['65 sec', '89 sec', '100 sec', '150 sec'],
            correctAnswer: '89 sec',
          },
          {
            question: 'Two trains of equal length are running on parallel lines in the same direction at 46 km/hr and 36 km/hr. The faster train passes the slower train in 36 seconds. The length of each train is:',
            options: ['50 m', '72 m', '80 m', '82 m'],
            correctAnswer: '80 m',
          },
          {
            question: 'A train 360 m long is running at a speed of 45 km/hr. In what time will it pass a bridge 140 m long?',
            options: ['40 sec', '42 sec', '45 sec', '48 sec'],
            correctAnswer: '40 sec',
          },
          {
            question: 'Two trains are moving in opposite directions @ 60 km/hr and 90 km/hr. Their lengths are 1.10 km and 0.9 km respectively. The time taken by the slower train to cross the faster train in seconds is:',
            options: ['36', '45', '48', '49'],
            correctAnswer: '48',
          },
          {
            question: 'A jogger running at 9 kmph alongside a railway track in 240 metres ahead of the engine of a 120 metres long train running at 45 kmph in the same direction. In how much time will the train pass the jogger?',
            options: ['3.6 sec', '18 sec', '36 sec', '72 sec'],
            correctAnswer: '36 sec',
          },
          {
            question: 'A 270 metres long train running at the speed of 120 kmph crosses another train running in opposite direction at the speed of 80 kmph in 9 seconds. What is the length of the other train?',
            options: ['230 m', '240 m', '260 m', '320 m', 'None of these'],
            correctAnswer: '320 m',
          },
          {
            question: 'A goods train runs at the speed of 72 kmph and crosses a 250 m long platform in 26 seconds. What is the length of the goods train?',
            options: ['230 m', '240 m', '260 m', '270 m'],
            correctAnswer: '260 m',
          },
          {
            question: 'Two trains, each 100 m long, moving in opposite directions, cross each other in 8 seconds. If one is moving twice as fast the other, then the speed of the faster train is:',
            options: ['30 km/hr', '45 km/hr', '60 km/hr', '75 km/hr'],
            correctAnswer: '60 km/hr',
          },
          {
            question: 'Two trains 140 m and 160 m long run at the speed of 60 km/hr and 40 km/hr respectively in opposite directions on parallel tracks. The time (in seconds) which they take to cross each other, is:',
            options: ['9', '9.6', '10', '10.8'],
            correctAnswer: '10.8',
          },
          {
            question: 'A train 110 metres long is running with a speed of 60 kmph. In what time will it pass a man who is running at 6 kmph in the direction opposite to that in which the train is going?',
            options: ['5 sec', '6 sec', '7 sec', '10 sec'],
            correctAnswer: '6 sec',
          },
          {
            question: 'A train 100 m long crosses a platform 200 m long in 10 seconds. Find the speed of the train.',
            options: ['36 km/h', '54 km/h', '72 km/h', '108 km/h'],
            correctAnswer: '36 km/h',
          },
          {
            question: 'If a car travels 120 km in 2 hours, what is its speed?',
            options: ['60 km/h', '70 km/h', '80 km/h', '90 km/h'],
            correctAnswer: '60 km/h',
          },
          {
            question: 'A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?',
            options: ['120 metres', '180 metres', '324 metres', '150 metres'],
            correctAnswer: '150 metres',
          },
          {
            question: 'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:',
            options: ['45 km/hr', '50 km/hr', '54 km/hr', '55 km/hr'],
            correctAnswer: '54 km/hr',
          },
          {
            question: 'The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:',
            options: ['200 m', '225 m', '245 m', '250 m'],
            correctAnswer: '245 m',
          },
          {
            question: 'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
            options: ['1 : 3', '3 : 2', '3 : 4', 'None of these'],
            correctAnswer: '3 : 2',
          },
          {
            question: 'A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?',
            options: ['120 m', '240 m', '300 m', 'None of these'],
            correctAnswer: '240 m',
          },
          {
            question: 'A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?',
            options: ['65 sec', '89 sec', '100 sec', '150 sec'],
            correctAnswer: '89 sec',
          },
          {
            question: 'Two trains of equal length are running on parallel lines in the same direction at 46 km/hr and 36 km/hr. The faster train passes the slower train in 36 seconds. The length of each train is:',
            options: ['50 m', '72 m', '80 m', '82 m'],
            correctAnswer: '80 m',
          },
          {
            question: 'A train 360 m long is running at a speed of 45 km/hr. In what time will it pass a bridge 140 m long?',
            options: ['40 sec', '42 sec', '45 sec', '48 sec'],
            correctAnswer: '40 sec',
          },
          {
            question: 'Two trains are moving in opposite directions @ 60 km/hr and 90 km/hr. Their lengths are 1.10 km and 0.9 km respectively. The time taken by the slower train to cross the faster train in seconds is:',
            options: ['36', '45', '48', '49'],
            correctAnswer: '48',
          },
          {
            question: 'A jogger running at 9 kmph alongside a railway track in 240 metres ahead of the engine of a 120 metres long train running at 45 kmph in the same direction. In how much time will the train pass the jogger?',
            options: ['3.6 sec', '18 sec', '36 sec', '72 sec'],
            correctAnswer: '36 sec',
          },
          {
            question: 'A 270 metres long train running at the speed of 120 kmph crosses another train running in opposite direction at the speed of 80 kmph in 9 seconds. What is the length of the other train?',
            options: ['230 m', '240 m', '260 m', '320 m', 'None of these'],
            correctAnswer: '320 m',
          },
          {
            question: 'A goods train runs at the speed of 72 kmph and crosses a 250 m long platform in 26 seconds. What is the length of the goods train?',
            options: ['230 m', '240 m', '260 m', '270 m'],
            correctAnswer: '260 m',
          },
          {
            question: 'Two trains, each 100 m long, moving in opposite directions, cross each other in 8 seconds. If one is moving twice as fast the other, then the speed of the faster train is:',
            options: ['30 km/hr', '45 km/hr', '60 km/hr', '75 km/hr'],
            correctAnswer: '60 km/hr',
          },
          {
            question: 'Two trains 140 m and 160 m long run at the speed of 60 km/hr and 40 km/hr respectively in opposite directions on parallel tracks. The time (in seconds) which they take to cross each other, is:',
            options: ['9', '9.6', '10', '10.8'],
            correctAnswer: '10.8',
          },
          {
            question: 'A train 110 metres long is running with a speed of 60 kmph. In what time will it pass a man who is running at 6 kmph in the direction opposite to that in which the train is going?',
            options: ['5 sec', '6 sec', '7 sec', '10 sec'],
            correctAnswer: '6 sec',
          },
          {
            question: 'A train 100 m long crosses a platform 200 m long in 10 seconds. Find the speed of the train.',
            options: ['36 km/h', '54 km/h', '72 km/h', '108 km/h'],
            correctAnswer: '36 km/h',
          },
          {
            question: 'If a car travels 120 km in 2 hours, what is its speed?',
            options: ['60 km/h', '70 km/h', '80 km/h', '90 km/h'],
            correctAnswer: '60 km/h',
          },
          {
            question: 'A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?',
            options: ['120 metres', '180 metres', '324 metres', '150 metres'],
            correctAnswer: '150 metres',
          },
          {
            question: 'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:',
            options: ['45 km/hr', '50 km/hr', '54 km/hr', '55 km/hr'],
            correctAnswer: '54 km/hr',
          },
          {
            question: 'The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:',
            options: ['200 m', '225 m', '245 m', '250 m'],
            correctAnswer: '245 m',
          },
          {
            question: 'Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:',
            options: ['1 : 3', '3 : 2', '3 : 4', 'None of these'],
            correctAnswer: '3 : 2',
          },
          {
            question: 'A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?',
            options: ['120 m', '240 m', '300 m', 'None of these'],
            correctAnswer: '240 m',
          },
          {
            question: 'A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?',
            options: ['65 sec', '89 sec', '100 sec', '150 sec'],
            correctAnswer: '89 sec',
          },
          {
            question: 'Two trains of equal length are running on parallel lines in the same direction at 46 km/hr and 36 km/hr. The faster train passes the slower train in 36 seconds. The length of each train is:',
            options: ['50 m', '72 m', '80 m', '82 m'],
            correctAnswer: '80 m',
          },
          {
            question: 'A train 360 m long is running at a speed of 45 km/hr. In what time will it pass a bridge 140 m long?',
            options: ['40 sec', '42 sec', '45 sec', '48 sec'],
            correctAnswer: '40 sec',
          },
          {
            question: 'Two trains are moving in opposite directions @ 60 km/hr and 90 km/hr. Their lengths are 1.10 km and 0.9 km respectively. The time taken by the slower train to cross the faster train in seconds is:',
            options: ['36', '45', '48', '49'],
            correctAnswer: '48',
          },
          {
            question: 'A jogger running at 9 kmph alongside a railway track in 240 metres ahead of the engine of a 120 metres long train running at 45 kmph in the same direction. In how much time will the train pass the jogger?',
            options: ['3.6 sec', '18 sec', '36 sec', '72 sec'],
            correctAnswer: '36 sec',
          },
          {
            question: 'A 270 metres long train running at the speed of 120 kmph crosses another train running in opposite direction at the speed of 80 kmph in 9 seconds. What is the length of the other train?',
            options: ['230 m', '240 m', '260 m', '320 m', 'None of these'],
            correctAnswer: '320 m',
          },
          {
            question: 'A goods train runs at the speed of 72 kmph and crosses a 250 m long platform in 26 seconds. What is the length of the goods train?',
            options: ['230 m', '240 m', '260 m', '270 m'],
            correctAnswer: '260 m',
          },
          {
            question: 'Two trains, each 100 m long, moving in opposite directions, cross each other in 8 seconds. If one is moving twice as fast the other, then the speed of the faster train is:',
            options: ['30 km/hr', '45 km/hr', '60 km/hr', '75 km/hr'],
            correctAnswer: '60 km/hr',
          },
          {
            question: 'Two trains 140 m and 160 m long run at the speed of 60 km/hr and 40 km/hr respectively in opposite directions on parallel tracks. The time (in seconds) which they take to cross each other, is:',
            options: ['9', '9.6', '10', '10.8'],
            correctAnswer: '10.8',
          },
          {
            question: 'A train 110 metres long is running with a speed of 60 kmph. In what time will it pass a man who is running at 6 kmph in the direction opposite to that in which the train is going?',
            options: ['5 sec', '6 sec', '7 sec', '10 sec'],
            correctAnswer: '6 sec',
          },
          {
            question: 'A train travelling at a speed of 75 mph enters a tunnel 3½ miles long. The train is ¼ mile long. How long does it take for the train to pass through the tunnel from the moment the front enters to the moment the rear emerges?',
            options: ['2.5 min', '3 min', '3.2 min', '3.5 min'],
            correctAnswer: '3 min',
          },
          {
            question: 'A train 800 metres long is running at a speed of 78 km/hr. If it crosses a tunnel in 1 minute, then the length of the tunnel (in meters) is:',
            options: ['130', '360', '500', '540'],
            correctAnswer: '500',
          },
          {
            question: 'A 300 metre long train crosses a platform in 39 seconds while it crosses a signal pole in 18 seconds. What is the length of the platform?',
            options: ['320 m', '350 m', '650 m', 'Data inadequate'],
            correctAnswer: '350 m',
          },
          {
            question: 'A train speeds past a pole in 15 seconds and a platform 100 m long in 25 seconds. Its length is:',
            options: ['50 m', '150 m', '200 m', 'Data inadequate'],
            correctAnswer: '150 m',
          },
          {
            question: 'A train moves past a telegraph post and a bridge 264 m long in 8 seconds and 20 seconds respectively. What is the speed of the train?',
            options: ['69.5 km/hr', '70 km/hr', '79 km/hr', '79.2 km/hr'],
            correctAnswer: '79.2 km/hr',
          }
        ],
        'Time and Distance': [
          {
            question: 'A person walks 5 km in 1 hour. How much time will they take to walk 20 km?',
            options: ['2 hours', '3 hours', '4 hours', '5 hours'],
            correctAnswer: '4 hours',
          },
          {
            question: 'A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?',
            options: ['3.6', '7.2', '8.4', '10'],
            correctAnswer: '7.2',
          },
          {
            question: 'An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 hour, it must travel at a speed of:',
            options: ['300 kmph', '360 kmph', '600 kmph', '720 kmph'],
            correctAnswer: '1200 kmph',
          },
          {
            question: 'If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:',
            options: ['50 km', '56 km', '70 km', '80 km'],
            correctAnswer: '50 km',
          },
          {
            question: 'A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:',
            options: ['100 kmph', '110 kmph', '120 kmph', '130 kmph'],
            correctAnswer: '120 kmph',
          },
          {
            question: 'Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?',
            options: ['9', '10', '12', '20'],
            correctAnswer: '10',
          },
          {
            question: 'In a flight of 600 km, an aircraft was slowed down due to bad weather. Its average speed for the trip was reduced by 200 km/hr and the time of flight increased by 30 minutes. The duration of the flight is:',
            options: ['1 hour', '2 hours', '3 hours', '4 hours'],
            correctAnswer: '3 hours',
          },
          {
            question: 'A man completes a journey in 10 hours. He travels the first half of the journey at the rate of 21 km/hr and the second half at the rate of 24 km/hr. Find the total journey in km.',
            options: ['220 km', '224 km', '230 km', '234 km'],
            correctAnswer: '224 km',
          },
          {
            question: 'The ratio between the speeds of two trains is 7:8. If the second train runs 400 km in 4 hours, then the speed of the first train is:',
            options: ['70 km/hr', '75 km/hr', '84 km/hr', '87.5 km/hr'],
            correctAnswer: '87.5 km/hr',
          },
          {
            question: 'A man on tour travels first 160 km at 64 km/hr and the next 160 km at 80 km/hr. The average speed for the first 320 km of the tour is:',
            options: ['35.55 km/hr', '36 km/hr', '71.11 km/hr', '71 km/hr'],
            correctAnswer: '71.11 km/hr',
          },
          {
            question: 'A car travelling with 7/8 of its actual speed covers 42 km in 1 hr 40 min 48 sec. Find the actual speed of the car.',
            options: ['25 km/hr', '30 km/hr', '35 km/hr', '40 km/hr'],
            correctAnswer: '35 km/hr',
          },
          {
            question: 'In covering a distance of 30 km, Abhay takes 2 hours more than Sameer. If Abhay doubles his speed, then he would take 1 hour less than Sameer. Abhay\'s speed is:',
            options: ['5 kmph', '6 kmph', '6.25 kmph', '7.5 kmph'],
            correctAnswer: '5 kmph',
          },
          {
            question: 'Robert is travelling on his cycle and has calculated to reach point A at 2 P.M. If he travels at 10 kmph, he will reach there at 12 noon; if he travels at 15 kmph, he will reach there at 1 P.M. At what speed must he travel to reach A at 1 P.M.?',
            options: ['8 kmph', '11 kmph', '12 kmph', '14 kmph'],
            correctAnswer: '12 kmph',
          },
          {
            question: 'It takes eight hours for a 600 km journey, if 120 km is done by train and the rest by car. It takes 20 minutes more, if 200 km is done by train and the rest by car. The ratio of the speed of the train to that of the car is:',
            options: ['2:3', '3:2', '3:4', '4:3'],
            correctAnswer: '3:2',
          },
          {
            question: 'A farmer travelled a distance of 61 km in 9 hours. He travelled partly on foot at 4 km/hr and partly on bicycle at 9 km/hr. The distance travelled on foot is:',
            options: ['14 km', '15 km', '16 km', '17 km'],
            correctAnswer: '16 km',
          },
          {
            question: 'A man covered a certain distance at some speed. Had he moved 3 kmph faster, he would have taken 40 minutes less. If he had moved 2 kmph slower, he would have taken 40 minutes more. The distance (in km) is:',
            options: ['35 km', '36 km', '37 km', '40 km'],
            correctAnswer: '40 km',
          }
        ],
        'Ratio and Proportion': [
          {
            question: 'If a:b = 2:3, then b:a is?',
            options: ['3:2', '2:3', '1:2', '1:3'],
            correctAnswer: '3:2',
          },
          {
            question: 'A and B together have Rs. 1210. If 1/3 of A\'s amount is equal to 1/4 of B\'s amount, how much amount does B have?',
            options: ['Rs. 460', 'Rs. 484', 'Rs. 550', 'Rs. 664'],
            correctAnswer: 'Rs. 484',
          },
          {
            question: 'Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is:',
            options: ['2 : 5', '3 : 5', '4 : 5', '6 : 7'],
            correctAnswer: '3 : 5',
          },
          {
            question: 'A sum of money is to be distributed among A, B, C, D in the proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D, what is B\'s share?',
            options: ['Rs. 500', 'Rs. 1500', 'Rs. 2000', 'None of these'],
            correctAnswer: 'Rs. 1500',
          },
          {
            question: 'Seats for Mathematics, Physics and Biology in a school are in the ratio 5 : 7 : 8. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the ratio of increased seats?',
            options: ['2 : 3 : 4', '6 : 7 : 8', '6 : 8 : 9', 'None of these'],
            correctAnswer: '6 : 8 : 9',
          },
          {
            question: 'In a mixture of 60 litres, the ratio of milk and water is 2 : 1. If this ratio is to be 1 : 2, then the quantity of water to be further added is:',
            options: ['20 litres', '30 litres', '40 litres', '60 litres'],
            correctAnswer: '30 litres',
          },
          {
            question: 'The ratio of the number of boys and girls in a college is 7 : 8. If the percentage increase in the number of boys and girls is 20% and 10% respectively, what will be the new ratio?',
            options: ['8 : 9', '17 : 18', '21 : 22', 'Cannot be determined'],
            correctAnswer: '21 : 22',
          },
          {
            question: 'Salaries of Ravi and Sumit are in the ratio 2 : 3. If the salary of each is increased by Rs. 4000, the new ratio becomes 40 : 57. What is Sumit\'s salary?',
            options: ['Rs. 17,000', 'Rs. 20,000', 'Rs. 25,500', 'Rs. 38,000'],
            correctAnswer: 'Rs. 38,000',
          },
          {
            question: 'If 0.75 : x :: 5 : 8, then x is equal to:',
            options: ['1.12', '1.2', '1.25', '1.30'],
            correctAnswer: '1.25',
          },
          {
            question: 'The sum of three numbers is 98. If the ratio of the first to second is 2 : 3 and that of the second to the third is 5 : 8, then the second number is:',
            options: ['20', '30', '48', '58'],
            correctAnswer: '30',
          },
          {
            question: 'If Rs. 782 be divided into three parts, proportional to 5 : 6 : 7, then the first part is:',
            options: ['Rs. 182', 'Rs. 190', 'Rs. 196', 'Rs. 204'],
            correctAnswer: 'Rs. 196',
          },
          {
            question: 'The salaries A, B, C are in the ratio 2 : 3 : 5. If the increments of 15%, 10% and 20% are allowed respectively in their salaries, then what will be the new ratio of their salaries?',
            options: ['3 : 3 : 10', '10 : 11 : 20', '23 : 33 : 60', 'Cannot be determined'],
            correctAnswer: '23 : 33 : 60',
          },
          {
            question: 'If 40% of a number is equal to two-third of another number, what is the ratio of the first number to the second number?',
            options: ['2 : 5', '3 : 7', '5 : 3', '7 : 3'],
            correctAnswer: '3 : 5',
          },
          {
            question: 'The fourth proportional to 5, 8, 15 is:',
            options: ['18', '24', '19', '20'],
            correctAnswer: '24',
          },
          {
            question: 'Two numbers are in the ratio 3 : 5. If 9 is subtracted from each, the new numbers are in the ratio 12 : 23. The smaller number is:',
            options: ['27', '33', '49', '55'],
            correctAnswer: '33',
          },
          {
            question: 'In a bag, there are coins of 25 p, 10 p and 5 p in the ratio of 1 : 2 : 3. If there is Rs. 30 in all, how many 5 p coins are there?',
            options: ['50', '100', '150', '200'],
            correctAnswer: '150',
          }
        ],
        'Height and Distance': [
          {
            question: 'Two ships are sailing in the sea on the two sides of a lighthouse. The angle of elevation of the top of the lighthouse observed from the ships are 30° and 45° respectively. If the lighthouse is 100 m high, what is the distance between the two ships?',
            options: ['173 m', '200 m', '273 m', '300 m'],
            correctAnswer: '273 m',
          },
          {
            question: 'A man standing at a point P is watching the top of a tower, which makes an angle of elevation of 30° with the man\'s eye. The man walks some distance towards the tower to watch its top and the angle of the elevation becomes 60°. What is the distance between the base of the tower and point P?',
            options: ['43 units', '8 units', '12 units', 'Data inadequate'],
            correctAnswer: 'Data inadequate',
          },
          {
            question: 'The angle of elevation of a ladder leaning against a wall is 60° and the foot of the ladder is 4.6 m away from the wall. What is the length of the ladder?',
            options: ['2.3 m', '4.6 m', '7.8 m', '9.2 m'],
            correctAnswer: '9.2 m',
          },
          {
            question: 'An observer 1.6 m tall is 203 m away from a tower. The angle of elevation from his eye to the top of the tower is 30°. What is the height of the tower?',
            options: ['21.6 m', '23.2 m', '24.72 m', 'None of these'],
            correctAnswer: '24.72 m',
          },
          {
            question: 'From a point P on a level ground, the angle of elevation of the top of a tower is 30°. If the tower is 100 m high, what is the distance of point P from the foot of the tower?',
            options: ['149 m', '156 m', '173 m', '200 m'],
            correctAnswer: '173 m',
          },
          {
            question: 'The angle of elevation of the sun, when the length of the shadow of a tree is 3 times the height of the tree, is:',
            options: ['30°', '45°', '60°', '90°'],
            correctAnswer: '30°',
          }
        ],
        'Time and Work': [
          {
            question: 'A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is:',
            options: ['1/4', '1/10', '7/15', '8/15'],
            correctAnswer: '7/15',
        },
        {
            question: 'A can lay railway track between two given stations in 16 days and B can do the same job in 12 days. With help of C, they did the job in 4 days only. Then, C alone can do the job in:',
            options: ['9 1/3 days', '5 9/10 days', '5 9/3 days', '5 10 days'],
            correctAnswer: '9 1/3 days',
        },
        {
            question: 'A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?',
            options: ['12 days', '15 days', '16 days', '18 days'],
            correctAnswer: '18 days',
        },
        {
            question: 'A is thrice as good a workman as B and therefore is able to finish a job in 60 days less than B. Working together, they can do it in:',
            options: ['20 days', '22 1/2 days', '25 days', '30 days'],
            correctAnswer: '20 days',
        },
        {
            question: 'A alone can do a piece of work in 6 days and B alone in 8 days. A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C?',
            options: ['Rs. 375', 'Rs. 400', 'Rs. 600', 'Rs. 800'],
            correctAnswer: 'Rs. 800',
        },
        {
          question: 'If 6 men and 8 boys can do a piece of work in 10 days while 26 men and 48 boys can do the same in 2 days, the time taken by 15 men and 20 boys in doing the same type of work will be:',
          options: ['4 days', '5 days', '6 days', '7 days'],
          correctAnswer: '5 days',
      },
      {
          question: 'A can do a piece of work in 4 hours; B and C together can do it in 3 hours, while A and C together can do it in 2 hours. How long will B alone take to do it?',
          options: ['8 hours', '10 hours', '12 hours', '24 hours'],
          correctAnswer: '12 hours',
      },
      {
          question: 'A can do a certain work in the same time in which B and C together can do it. If A and B together could do it in 10 days and C alone in 50 days, then B alone could do it in:',
          options: ['15 days', '20 days', '25 days', '30 days'],
          correctAnswer: '25 days',
      },
      {
          question: 'A does 80% of a work in 20 days. He then calls in B and they together finish the remaining work in 3 days. How long would B alone take to do the whole work?',
          options: ['23 days', '37 days', '37 1/2 days', '40 days'],
          correctAnswer: '37 1/2 days',
      },
      {
          question: 'A machine P can print one lakh books in 8 hours, machine Q can print the same number of books in 10 hours while machine R can print them in 12 hours. All the machines are started at 9 A.M. while machine P is closed at 11 A.M. and the remaining two machines complete the work. Approximately at what time will the work (to print one lakh books) be finished?',
          options: ['11:30 A.M.', '12 noon', '12:30 P.M.', '1:00 P.M.'],
          correctAnswer: '12:30 P.M.',
      }

        ],
        'Simple Interest': [
          {
            question: 'A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:',
            options: ['Rs. 650', 'Rs. 690', 'Rs. 698', 'Rs. 700'],
            correctAnswer: 'Rs. 700',
        },
        {
            question: 'Mr. Thomas invested an amount of Rs. 13,900 divided in two different schemes A and B at the simple interest rate of 14% p.a. and 11% p.a. respectively. If the total amount of simple interest earned in 2 years be Rs. 3508, what was the amount invested in Scheme B?',
            options: ['Rs. 6400', 'Rs. 6500', 'Rs. 7200', 'Rs. 7500', 'None of these'],
            correctAnswer: 'Rs. 7500',
        },
        {
            question: 'A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?',
            options: ['Rs. 4462.50', 'Rs. 8032.50', 'Rs. 8900', 'Rs. 8925', 'None of these'],
            correctAnswer: 'Rs. 8900',
        },
        {
            question: 'How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?',
            options: ['3.5 years', '4 years', '4.5 years', '5 years'],
            correctAnswer: '4 years',
        },
        {
            question: 'Reena took a loan of Rs. 1200 with simple interest for as many years as the rate of interest. If she paid Rs. 432 as interest at the end of the loan period, what was the rate of interest?',
            options: ['3.6%', '6%', '18%', 'Cannot be determined', 'None of these'],
            correctAnswer: '18%',
        },
        {
          question: 'A sum of Rs. 12,500 amounts to Rs. 15,500 in 4 years at the rate of simple interest. What is the rate of interest?',
          options: ['3%', '4%', '5%', '6%', 'None of these'],
          correctAnswer: '6%',
      },
      {
          question: 'An automobile financier claims to be lending money at simple interest, but he includes the interest every six months for calculating the principal. If he is charging an interest of 10%, the effective rate of interest becomes:',
          options: ['10%', '10.25%', '10.5%', 'None of these'],
          correctAnswer: '10.25%',
      },
      {
          question: 'A lent Rs. 5000 to B for 2 years and Rs. 3000 to C for 4 years on simple interest at the same rate of interest and received Rs. 2200 in all from both of them as interest. The rate of interest per annum is:',
          options: ['5%', '7%', '7.5%', '8%', '10%'],
          correctAnswer: '10%',
      },
      {
          question: 'A sum of Rs. 725 is lent in the beginning of a year at a certain rate of interest. After 8 months, a sum of Rs. 362.50 more is lent but at the rate twice the former. At the end of the year, Rs. 33.50 is earned as interest from both the loans. What was the original rate of interest?',
          options: ['3.6%', '4.5%', '5%', '6%', 'None of these'],
          correctAnswer: '5%',
      },
      {
          question: 'A man took loan from a bank at the rate of 12% p.a. simple interest. After 3 years he had to pay Rs. 5400 interest only for the period. The principal amount borrowed by him was:',
          options: ['Rs. 2000', 'Rs. 10,000', 'Rs. 15,000', 'Rs. 20,000'],
          correctAnswer: 'Rs. 15,000',
      },
      {
          question: 'A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:',
          options: ['Rs. 650', 'Rs. 690', 'Rs. 698', 'Rs. 700'],
          correctAnswer: 'Rs. 700',
      },
      {
          question: 'Mr. Thomas invested an amount of Rs. 13,900 divided in two different schemes A and B at the simple interest rate of 14% p.a. and 11% p.a. respectively. If the total amount of simple interest earned in 2 years be Rs. 3508, what was the amount invested in Scheme B?',
          options: ['Rs. 6400', 'Rs. 6500', 'Rs. 7200', 'Rs. 7500', 'None of these'],
          correctAnswer: 'Rs. 7500',
      },
      {
          question: 'A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?',
          options: ['Rs. 4462.50', 'Rs. 8032.50', 'Rs. 8900', 'Rs. 8925', 'None of these'],
          correctAnswer: 'Rs. 8900',
      },
      {
          question: 'How much time will it take for an amount of Rs. 450 to yield Rs. 81 as interest at 4.5% per annum of simple interest?',
          options: ['3.5 years', '4 years', '4.5 years', '5 years'],
          correctAnswer: '4 years',
      },
      {
          question: 'Reena took a loan of Rs. 1200 with simple interest for as many years as the rate of interest. If she paid Rs. 432 as interest at the end of the loan period, what was the rate of interest?',
          options: ['3.6%', '6%', '18%', 'Cannot be determined', 'None of these'],
          correctAnswer: '18%',
      }
        ],
        'Compound Interest': [
          {
            question: 'A bank offers 5% compound interest calculated on half-yearly basis. A customer deposits Rs. 1600 each on 1st January and 1st July of a year. At the end of the year, the amount he would have gained by way of interest is:',
            options: ['Rs. 120', 'Rs. 121', 'Rs. 122', 'Rs. 123'],
            correctAnswer: 'Rs. 123',
        },
        {
            question: 'The difference between simple and compound interests compounded annually on a certain sum of money for 2 years at 4% per annum is Re. 1. The sum (in Rs.) is:',
            options: ['625', '630', '640', '650'],
            correctAnswer: 'Rs. 625',
        },
        {
            question: 'There is 60% increase in an amount in 6 years at simple interest. What will be the compound interest of Rs. 12,000 after 3 years at the same rate?',
            options: ['Rs. 2160', 'Rs. 3120', 'Rs. 3972', 'Rs. 6240', 'None of these'],
            correctAnswer: 'Rs. 3972',
        },
        {
            question: 'What is the difference between the compound interests on Rs. 5000 for 1 year at 4% per annum compounded yearly and half-yearly?',
            options: ['Rs. 2.04', 'Rs. 3.06', 'Rs. 4.80', 'Rs. 8.30'],
            correctAnswer: 'Rs. 3.06',
        },
        {
            question: 'The compound interest on Rs. 30,000 at 7% per annum is Rs. 4347. The period (in years) is:',
            options: ['2', '2 1/2', '3', '4'],
            correctAnswer: '2 1/2 years',
        },
        {
          question: 'A bank offers 5% compound interest calculated on half-yearly basis. A customer deposits Rs. 1600 each on 1st January and 1st July of a year. At the end of the year, the amount he would have gained by way of interest is:',
          options: ['Rs. 120', 'Rs. 121', 'Rs. 122', 'Rs. 123'],
          correctAnswer: 'Rs. 123',
      },
      {
          question: 'The difference between simple and compound interests compounded annually on a certain sum of money for 2 years at 4% per annum is Re. 1. The sum (in Rs.) is:',
          options: ['625', '630', '640', '650'],
          correctAnswer: 'Rs. 625',
      },
      {
          question: 'There is 60% increase in an amount in 6 years at simple interest. What will be the compound interest of Rs. 12,000 after 3 years at the same rate?',
          options: ['Rs. 2160', 'Rs. 3120', 'Rs. 3972', 'Rs. 6240', 'None of these'],
          correctAnswer: 'Rs. 3972',
      },
      {
          question: 'What is the difference between the compound interests on Rs. 5000 for 1 year at 4% per annum compounded yearly and half-yearly?',
          options: ['Rs. 2.04', 'Rs. 3.06', 'Rs. 4.80', 'Rs. 8.30'],
          correctAnswer: 'Rs. 3.06',
      },
      {
          question: 'The compound interest on Rs. 30,000 at 7% per annum is Rs. 4347. The period (in years) is:',
          options: ['2', '2 1/2', '3', '4'],
          correctAnswer: '2 1/2 years',
      },
      {
          question: 'What will be the compound interest on a sum of Rs. 25,000 after 3 years at the rate of 12 p.c.p.a.?',
          options: ['Rs. 9000.30', 'Rs. 9720', 'Rs. 10123.20', 'Rs. 10483.20', 'None of these'],
          correctAnswer: 'Rs. 10483.20',
      },
      {
          question: 'At what rate of compound interest per annum will a sum of Rs. 1200 become Rs. 1348.32 in 2 years?',
          options: ['6%', '6.5%', '7%', '7.5%'],
          correctAnswer: '6%',
      },
      {
          question: 'The least number of complete years in which a sum of money put out at 20% compound interest will be more than doubled is:',
          options: ['3', '4', '5', '6'],
          correctAnswer: '4',
      },
      {
          question: 'Albert invested an amount of Rs. 8000 in a fixed deposit scheme for 2 years at compound interest rate 5 p.c.p.a. How much amount will Albert get on maturity of the fixed deposit?',
          options: ['Rs. 8600', 'Rs. 8620', 'Rs. 8820', 'None of these'],
          correctAnswer: 'Rs. 8820',
      },
      {
          question: 'The effective annual rate of interest corresponding to a nominal rate of 6% per annum payable half-yearly is:',
          options: ['6.06%', '6.07%', '6.08%', '6.09%'],
          correctAnswer: '6.09%',
      },
      {
        question: 'A bank offers 5% compound interest calculated on half-yearly basis. A customer deposits Rs. 1600 each on 1st January and 1st July of a year. At the end of the year, the amount he would have gained by way of interest is:',
        options: ['Rs. 120', 'Rs. 121', 'Rs. 122', 'Rs. 123'],
        correctAnswer: 'Rs. 123',
    },
    {
        question: 'The difference between simple and compound interests compounded annually on a certain sum of money for 2 years at 4% per annum is Re. 1. The sum (in Rs.) is:',
        options: ['625', '630', '640', '650'],
        correctAnswer: 'Rs. 625',
    },
    {
        question: 'There is 60% increase in an amount in 6 years at simple interest. What will be the compound interest of Rs. 12,000 after 3 years at the same rate?',
        options: ['Rs. 2160', 'Rs. 3120', 'Rs. 3972', 'Rs. 6240', 'None of these'],
        correctAnswer: 'Rs. 3972',
    },
    {
        question: 'What is the difference between the compound interests on Rs. 5000 for 1 year at 4% per annum compounded yearly and half-yearly?',
        options: ['Rs. 2.04', 'Rs. 3.06', 'Rs. 4.80', 'Rs. 8.30'],
        correctAnswer: 'Rs. 3.06',
    },
    {
        question: 'The compound interest on Rs. 30,000 at 7% per annum is Rs. 4347. The period (in years) is:',
        options: ['2', '2 1/2', '3', '4'],
        correctAnswer: '2 1/2 years',
    },
    {
        question: 'What will be the compound interest on a sum of Rs. 25,000 after 3 years at the rate of 12 p.c.p.a.?',
        options: ['Rs. 9000.30', 'Rs. 9720', 'Rs. 10123.20', 'Rs. 10483.20', 'None of these'],
        correctAnswer: 'Rs. 10483.20',
    },
    {
        question: 'At what rate of compound interest per annum will a sum of Rs. 1200 become Rs. 1348.32 in 2 years?',
        options: ['6%', '6.5%', '7%', '7.5%'],
        correctAnswer: '6%',
    },
    {
        question: 'The least number of complete years in which a sum of money put out at 20% compound interest will be more than doubled is:',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4',
    },
    {
        question: 'Albert invested an amount of Rs. 8000 in a fixed deposit scheme for 2 years at compound interest rate 5 p.c.p.a. How much amount will Albert get on maturity of the fixed deposit?',
        options: ['Rs. 8600', 'Rs. 8620', 'Rs. 8820', 'None of these'],
        correctAnswer: 'Rs. 8820',
    },
    {
        question: 'The effective annual rate of interest corresponding to a nominal rate of 6% per annum payable half-yearly is:',
        options: ['6.06%', '6.07%', '6.08%', '6.09%'],
        correctAnswer: '6.09%',
    },
    {
        question: 'Simple interest on a certain sum of money for 3 years at 8% per annum is half the compound interest on Rs. 4000 for 2 years at 10% per annum. The sum placed on simple interest is:',
        options: ['Rs. 1550', 'Rs. 1650', 'Rs. 1750', 'Rs. 2000'],
        correctAnswer: 'Rs. 1750',
    },
    {
        question: 'If the simple interest on a sum of money for 2 years at 5% per annum is Rs. 50, what is the compound interest on the same at the same rate and for the same time?',
        options: ['Rs. 51.25', 'Rs. 52', 'Rs. 54.25', 'Rs. 60'],
        correctAnswer: 'Rs. 51.25',
    },
    {
        question: 'The difference between simple interest and compound interest on Rs. 1200 for one year at 10% per annum reckoned half-yearly is:',
        options: ['Rs. 2.50', 'Rs. 3', 'Rs. 3.75', 'Rs. 4', 'None of these'],
        correctAnswer: 'Rs. 3',
    },
    {
        question: 'The difference between compound interest and simple interest on an amount of Rs. 15,000 for 2 years is Rs. 96. What is the rate of interest per annum?',
        options: ['8', '10', '12', 'Cannot be determined', 'None of these'],
        correctAnswer: '8',
    },
    {
        question: 'The compound interest on a certain sum for 2 years at 10% per annum is Rs. 525. The simple interest on the same sum for double the time at half the rate percent per annum is:',
        options: ['Rs. 400', 'Rs. 500', 'Rs. 600', 'Rs. 800'],
        correctAnswer: 'Rs. 500',
    }
        ],
        'Profit and Loss': [
          {
            question: 'Alfred buys an old scooter for Rs. 4700 and spends Rs. 800 on its repairs. If he sells the scooter for Rs. 5800, his gain percent is:',
            options: ['4 4/7%', '5 5/11%', '10%', '12%'],
            correctAnswer: '10%',
        },
        {
            question: 'The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:',
            options: ['15', '16', '18', '25'],
            correctAnswer: '16',
        },
        {
            question: 'If selling price is doubled, the profit triples. Find the profit percent.',
            options: ['66 2/3%', '100%', '105 1/3%', '120%'],
            correctAnswer: '100%',
        },
        {
            question: 'In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?',
            options: ['30%', '70%', '100%', '250%'],
            correctAnswer: '70%',
        },
        {
            question: 'A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?',
            options: ['3', '4', '5', '6'],
            correctAnswer: '5',
        },
        {
          question: 'Alfred buys an old scooter for Rs. 4700 and spends Rs. 800 on its repairs. If he sells the scooter for Rs. 5800, his gain percent is:',
          options: ['4 4/7%', '5 5/11%', '10%', '12%'],
          correctAnswer: '10%',
      },
      {
          question: 'The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:',
          options: ['15', '16', '18', '25'],
          correctAnswer: '16',
      },
      {
          question: 'If selling price is doubled, the profit triples. Find the profit percent.',
          options: ['66 2/3%', '100%', '105 1/3%', '120%'],
          correctAnswer: '100%',
      },
      {
          question: 'In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?',
          options: ['30%', '70%', '100%', '250%'],
          correctAnswer: '70%',
      },
      {
          question: 'A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?',
          options: ['3', '4', '5', '6'],
          correctAnswer: '5',
      },
      {
          question: 'The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?',
          options: ['Rs. 2000', 'Rs. 2200', 'Rs. 2400', 'Data inadequate'],
          correctAnswer: 'Rs. 2000',
      },
      {
          question: 'A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?',
          options: ['Rs. 18.20', 'Rs. 70', 'Rs. 72', 'Rs. 88.25'],
          correctAnswer: 'Rs. 72',
      },
      {
          question: 'A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?',
          options: ['Rs. 1090', 'Rs. 1160', 'Rs. 1190', 'Rs. 1202'],
          correctAnswer: 'Rs. 1190',
      },
      {
          question: 'Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?',
          options: ['3.5%', '4.5%', '5.6%', '6.5%'],
          correctAnswer: '5.6%',
      },
      {
          question: 'Some articles were bought at 6 articles for Rs. 5 and sold at 5 articles for Rs. 6. Gain percent is:',
          options: ['30%', '33 1/3%', '35%', '44%'],
          correctAnswer: '44%',
      },
      {
        question: 'On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:',
        options: ['Rs. 45', 'Rs. 50', 'Rs. 55', 'Rs. 60'],
        correctAnswer: 'Rs. 60',
    },
    {
        question: 'When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?',
        options: ['Rs. 21,000', 'Rs. 22,500', 'Rs. 25,300', 'Rs. 25,800'],
        correctAnswer: 'Rs. 25,300',
    },
    {
        question: '100 oranges are bought at the rate of Rs. 350 and sold at the rate of Rs. 48 per dozen. The percentage of profit or loss is:',
        options: ['14 2/7% gain', '15% gain', '14 2/7% loss', '15% loss'],
        correctAnswer: '14 2/7% gain',
    },
    {
        question: 'A shopkeeper sells one transistor for Rs. 840 at a gain of 20% and another for Rs. 960 at a loss of 4%. His total gain or loss percent is:',
        options: ['5 15/17% loss', '5 15/17% gain', '6 2/3% gain', 'None of these'],
        correctAnswer: '5 15/17% gain',
    },
    {
        question: 'A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:',
        options: ['No profit, no loss', '5%', '8%', '10%', 'None of these'],
        correctAnswer: '8%',
    }

        ],
        'Partnership': [
          {
            question: 'A and B invest in a business in the ratio 3:2. If 5% of the total profit goes to charity and A’s share is Rs. 855, what is the total profit?',
            options: ['Rs. 1200', 'Rs. 1500', 'Rs. 2000', 'Rs. 2500'],
            correctAnswer: 'Rs. 1500'
        },
        {
            question: 'A, B, and C enter into a partnership with investments of Rs. 1200, Rs. 1500, and Rs. 1800 respectively. If they earn a total profit of Rs. 1000, what will be C’s share?',
            options: ['Rs. 400', 'Rs. 300', 'Rs. 250', 'Rs. 350'],
            correctAnswer: 'Rs. 400'
        },
        {
            question: 'A starts a business with Rs. 45000. After 3 months, B joins with Rs. 30000. If the total profit at the end of the year is Rs. 4050, what is B’s share?',
            options: ['Rs. 1350', 'Rs. 1500', 'Rs. 1200', 'Rs. 1650'],
            correctAnswer: 'Rs. 1350'
        },
        {
            question: 'A and B invest Rs. 2000 and Rs. 3000 respectively. A is the working partner and gets 10% of the profit for managing the business. The remaining profit is divided in proportion to their capitals. If the total profit is Rs. 1000, what is B’s share?',
            options: ['Rs. 450', 'Rs. 500', 'Rs. 550', 'Rs. 600'],
            correctAnswer: 'Rs. 500'
        },
        {
            question: 'X and Y invest Rs. 4000 and Rs. 6000 in a business. X is a sleeping partner and Y gets 10% of the profit for managing the business. If the total profit is Rs. 2000, what is X’s share?',
            options: ['Rs. 800', 'Rs. 850', 'Rs. 900', 'Rs. 950'],
            correctAnswer: 'Rs. 800'
        },
        {
            question: 'A, B, and C start a business with Rs. 25000, Rs. 35000, and Rs. 40000 respectively. B is the working partner and gets 15% of the profit for managing the business. The rest is divided in proportion to their capitals. If the total profit is Rs. 6000, what is B’s share?',
            options: ['Rs. 2000', 'Rs. 2100', 'Rs. 2200', 'Rs. 2300'],
            correctAnswer: 'Rs. 2300'
        },
        {
            question: 'P and Q invested Rs. 4500 and Rs. 5500 in a business. They decided that 70% of the profit will be divided equally and the remaining will be shared in the ratio of their investments. If P gets Rs. 1200, what is the total profit?',
            options: ['Rs. 2200', 'Rs. 2400', 'Rs. 2600', 'Rs. 2800'],
            correctAnswer: 'Rs. 2400'
        },
        {
            question: 'A and B invest in a business in the ratio 5:4. After 6 months, A withdraws half of his investment. If the total profit at the end of the year is Rs. 6600, what is B’s share of the profit?',
            options: ['Rs. 3200', 'Rs. 3400', 'Rs. 3600', 'Rs. 3800'],
            correctAnswer: 'Rs. 3600'
        },
        {
            question: 'A, B, and C enter into a partnership with investments of Rs. 5000, Rs. 8000, and Rs. 12000 respectively. After a year, they make a profit of Rs. 7000. What is A’s share of the profit?',
            options: ['Rs. 1000', 'Rs. 1200', 'Rs. 1400', 'Rs. 1600'],
            correctAnswer: 'Rs. 1000'
        },
        {
            question: 'A, B, and C start a business. A invests Rs. 8000, B invests Rs. 12000, and C invests Rs. 16000. B is a working partner and gets 10% of the profit for managing the business. If the total profit is Rs. 6000, what is B’s share?',
            options: ['Rs. 2000', 'Rs. 2200', 'Rs. 2400', 'Rs. 2600'],
            correctAnswer: 'Rs. 2400'
        }
        ],
        'Percentage': [
          {
            question: 'What is 25% of 200?',
            options: ['40', '45', '50', '60'],
            correctAnswer: '50'
        },
        {
            question: 'If a number is increased by 20%, and then decreased by 20%, what is the net effect on the number?',
            options: ['No change', 'Decreased by 4%', 'Increased by 4%', 'Decreased by 2%'],
            correctAnswer: 'Decreased by 4%'
        },
        {
            question: 'A man spends 75% of his income. If his income increases by 20% and his expenditure increases by 10%, what is the percentage increase in his savings?',
            options: ['30%', '40%', '50%', '60%'],
            correctAnswer: '50%'
        },
        {
            question: 'In a class, 60% of students passed in Mathematics, 70% in English, and 50% in both. If 40 students failed in both subjects, how many students are there in total?',
            options: ['200', '150', '100', '120'],
            correctAnswer: '200'
        },
        {
            question: 'If the price of a commodity increases by 25%, then by what percentage should a consumer reduce the consumption to keep his expenditure constant?',
            options: ['25%', '20%', '15%', '10%'],
            correctAnswer: '20%'
        },
        {
            question: 'If A’s salary is 40% more than B’s, then B’s salary is what percentage less than A’s?',
            options: ['28.57%', '30%', '35%', '37.5%'],
            correctAnswer: '28.57%'
        },
        {
            question: 'A number is first increased by 10% and then decreased by 10%. The final number is:',
            options: ['Same as the original', 'Increased by 1%', 'Decreased by 1%', 'None of these'],
            correctAnswer: 'Decreased by 1%'
        },
        {
            question: 'The population of a town is increased by 12% annually. If the present population is 14400, what was the population 2 years ago?',
            options: ['11500', '12000', '13000', '14400'],
            correctAnswer: '11500'
        },
        {
            question: 'A student scores 72% in exams. If the total marks are 900, how many marks did the student score?',
            options: ['630', '648', '672', '684'],
            correctAnswer: '648'
        },
        {
            question: 'If a man earns Rs. 20000 and spends 75% of his income, what percentage of his income does he save?',
            options: ['20%', '25%', '30%', '35%'],
            correctAnswer: '25%'
        }
        ],
        'Problems on Ages': [
          {
            question: 'The present age of a father is 3 times that of his son. After 5 years, the father’s age will be 2.5 times the son’s age. What is the present age of the son?',
            options: ['10', '12', '15', '18'],
            correctAnswer: '10'
        },
        {
            question: 'The sum of the present ages of a father and his son is 60 years. Five years ago, the father’s age was 4 times the age of his son. What is the present age of the son?',
            options: ['10', '12', '15', '18'],
            correctAnswer: '15'
        },
        {
            question: 'A person’s present age is two-fifth of the age of his mother. After 8 years, he will be one-half of the age of his mother. How old is the mother at present?',
            options: ['30', '35', '40', '45'],
            correctAnswer: '40'
        },
        {
            question: 'Five years ago, A’s age was one-third of B’s age. If A is now 18 years old, what is B’s current age?',
            options: ['25', '30', '35', '40'],
            correctAnswer: '30'
        },
        {
          question: 'Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit\'s age. After further 8 years, how many times would he be of Ronit\'s age?',
          options: ['2 times', '2 1/3 times', '2', '3 times'],
          correctAnswer: '2 1/3 times'
      },
      {
          question: 'The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?',
          options: ['4 years', '8 years', '10 years', 'None of these'],
          correctAnswer: '4 years'
      },
      {
          question: 'A father said to his son, "I was as old as you are at present at the time of your birth." If the father\'s age is 38 years now, the son\'s age five years back was:',
          options: ['14 years', '19 years', '33 years', '38 years'],
          correctAnswer: '14 years'
      },
      {
          question: 'A is two years older than B who is twice as old as C. If the total of the ages of A, B, and C is 27, then how old is B?',
          options: ['7', '8', '9', '10'],
          correctAnswer: '10'
      },
      {
          question: 'Present ages of Sameer and Anand are in the ratio of 5:4 respectively. Three years hence, the ratio of their ages will become 11:9 respectively. What is Anand\'s present age in years?',
          options: ['24', '27', '40', 'Cannot be determined'],
          correctAnswer: '24'
      },
      {
          question: 'A man is 5 times as old as his son. After 10 years, he will be 3 times as old as his son. What is the present age of the son?',
          options: ['10', '15', '20', '25'],
          correctAnswer: '10'
      },
      {
          question: 'The sum of the ages of a father and his son is 56 years. If the father is 4 times as old as the son, how old is the son?',
          options: ['7', '8', '9', '10'],
          correctAnswer: '8'
      },
      {
          question: 'The ages of A, B, and C are in the ratio of 4:5:6. If the sum of their ages is 90 years, what is C’s age?',
          options: ['36', '40', '42', '45'],
          correctAnswer: '45'
      },
      {
          question: 'The present age of a mother is three times that of her daughter. After 12 years, the mother will be twice as old as the daughter. What is the present age of the daughter?',
          options: ['8', '10', '12', '14'],
          correctAnswer: '8'
      },
      {
          question: 'A man is 2 years older than his wife. If the sum of their ages is 30 years, what is the wife’s age?',
          options: ['14', '15', '16', '17'],
          correctAnswer: '14'
      }
        ],
        'Calendar': [
          {
            question: 'It was Sunday on Jan 1, 2006. What was the day of the week on Jan 1, 2010?',
            options: ['Sunday', 'Saturday', 'Friday', 'Wednesday'],
            correctAnswer: 'Friday'
        },
        {
            question: 'What was the day of the week on 28th May, 2006?',
            options: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
            correctAnswer: 'Sunday'
        },
        {
            question: 'What was the day of the week on 17th June, 1998?',
            options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            correctAnswer: 'Wednesday'
        },
        {
            question: 'What will be the day of the week on 15th August, 2010?',
            options: ['Sunday', 'Monday', 'Tuesday', 'Friday'],
            correctAnswer: 'Sunday'
        },
        {
            question: 'Today is Monday. After 61 days, it will be:',
            options: ['Wednesday', 'Saturday', 'Tuesday', 'Thursday'],
            correctAnswer: 'Wednesday'
        },
        {
            question: 'What day of the week was 1st January, 2000?',
            options: ['Saturday', 'Sunday', 'Friday', 'Monday'],
            correctAnswer: 'Saturday'
        },
        {
            question: 'If today is Wednesday, what will be the day of the week 50 days from now?',
            options: ['Tuesday', 'Saturday', 'Thursday', 'Monday'],
            correctAnswer: 'Saturday'
        },
        {
            question: 'What was the day of the week on 1st July, 2015?',
            options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            correctAnswer: 'Wednesday'
        },
        {
            question: 'What was the day of the week on 15th April, 1987?',
            options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            correctAnswer: 'Wednesday'
        },
        {
            question: 'If today is Saturday, what day will it be after 100 days?',
            options: ['Monday', 'Friday', 'Saturday', 'Sunday'],
            correctAnswer: 'Monday'
        },
        {
          question: 'If 6th March, 2005 is Monday, what was the day of the week on 6th March, 2004?',
          options: ['Sunday', 'Saturday', 'Tuesday', 'Wednesday'],
          correctAnswer: 'Sunday'
      },
      {
          question: 'On what dates of April, 2001 did Wednesday fall?',
          options: [
              '1st, 8th, 15th, 22nd, 29th',
              '2nd, 9th, 16th, 23rd, 30th',
              '3rd, 10th, 17th, 24th',
              '4th, 11th, 18th, 25th'
          ],
          correctAnswer: '4th, 11th, 18th, 25th'
      },
      {
          question: 'How many days are there in x weeks x days?',
          options: ['7x + 2', '8x', '14x', '7'],
          correctAnswer: '7x + 2'
      },
      {
          question: 'The last day of a century cannot be',
          options: ['Monday', 'Wednesday', 'Tuesday', 'Friday'],
          correctAnswer: 'Wednesday'
      },
      {
          question: 'On 8th Feb, 2005 it was Tuesday. What was the day of the week on 8th Feb, 2004?',
          options: ['Tuesday', 'Monday', 'Sunday', 'Wednesday'],
          correctAnswer: 'Sunday'
      },
      {
          question: 'What day of the week is 1st January 2022?',
          options: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
          correctAnswer: 'Saturday'
      },
      {
          question: 'If 1st January 2000 was a Saturday, what day will it be on 1st January 2025?',
          options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
          correctAnswer: 'Wednesday'
      },
      {
          question: 'How many leap years are there between 2000 and 2020?',
          options: ['5', '6', '7', '8'],
          correctAnswer: '5'
      },
      {
          question: 'What was the day of the week on 29th February 2004?',
          options: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
          correctAnswer: 'Sunday'
      },
      {
          question: 'If today is Friday, what day will it be after 200 days?',
          options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
          correctAnswer: 'Wednesday'
      }
        ],
        'Clock': [
          {
            question: 'An accurate clock shows 8 o\'clock in the morning. Through how many degrees will the hour hand rotate when the clock shows 2 o\'clock in the afternoon?',
            options: ['144°', '150°', '168°', '180°'],
            correctAnswer: '144°'
        },
        {
            question: 'The reflex angle between the hands of a clock at 10.25 is:',
            options: ['180°', '192° 1/2°', '195°', '197° 1/2°'],
            correctAnswer: '195°'
        },
        {
            question: 'A clock is started at noon. By 10 minutes past 5, the hour hand has turned through:',
            options: ['145°', '150°', '155°', '160°'],
            correctAnswer: '150°'
        },
        {
            question: 'A watch which gains 5 seconds in 3 minutes was set right at 7 a.m. In the afternoon of the same day, when the watch indicated quarter past 4 o\'clock, the true time is:',
            options: [
                '59 7 min. past 3',
                '4 p.m.',
                '58 7 min. past 3',
                '2 3 min. past 4'
            ],
            correctAnswer: '58 7 min. past 3'
        },
        {
            question: 'How much does a watch lose per day, if its hands coincide every 64 minutes?',
            options: ['32 8 min.', '36 5 min.', '90 min.', '96 min.'],
            correctAnswer: '96 min.'
        },
        {
            question: 'At what time will the hands of a clock coincide between 2 o’clock and 3 o’clock?',
            options: ['2:30', '2:35', '2:27', '2:20'],
            correctAnswer: '2:27'
        },
        {
            question: 'If a clock shows 3:15, what is the angle between the hour and the minute hands?',
            options: ['37.5°', '52.5°', '45°', '60°'],
            correctAnswer: '52.5°'
        },
        {
            question: 'How many times do the hands of a clock overlap in a day?',
            options: ['22 times', '24 times', '12 times', '20 times'],
            correctAnswer: '22 times'
        },
        {
            question: 'A clock gains 10 minutes every hour. If it shows 8:00, what is the true time?',
            options: ['7:50', '7:40', '8:10', '8:20'],
            correctAnswer: '7:50'
        },
        {
            question: 'How many degrees does the minute hand move in 45 minutes?',
            options: ['270°', '360°', '180°', '300°'],
            correctAnswer: '270°'
        },
        {
          question: 'At what time between 7 and 8 o\'clock will the hands of a clock be in the same straight line but not together?',
          options: ['5 min. past 7', '5 2/11 min. past 7', '11 5/3 min. past 7', '11 5/5 min. past 7'],
          correctAnswer: '5 2/11 min. past 7'
      },
      {
          question: 'At what time between 5.30 and 6 will the hands of a clock be at right angles?',
          options: ['43 5/11 min. past 5', '43 7/11 min. past 5', '40 min. past 5', '45 min. past 5'],
          correctAnswer: '43 5/11 min. past 5'
      },
      {
          question: 'The angle between the minute hand and the hour hand of a clock when the time is 4.20 is:',
          options: ['0°', '10°', '5°', '20°'],
          correctAnswer: '20°'
      },
      {
          question: 'At what angle are the hands of a clock inclined at 15 minutes past 5?',
          options: ['58 1/2°', '64°', '67 1/2°', '72 1/2°'],
          correctAnswer: '67 1/2°'
      },
      {
          question: 'At 3:40, the hour hand and the minute hand of a clock form an angle of:',
          options: ['120°', '125°', '130°', '135°'],
          correctAnswer: '130°'
      },
      {
          question: 'If the time is 2:30, what is the angle between the hour hand and the minute hand?',
          options: ['105°', '110°', '115°', '120°'],
          correctAnswer: '105°'
      },
      {
          question: 'How many degrees does the minute hand move in 20 minutes?',
          options: ['120°', '100°', '90°', '80°'],
          correctAnswer: '120°'
      },
      {
          question: 'At what time between 3 and 4 o’clock will the hands of a clock be in the same straight line but not together?',
          options: ['15 min past 3', '18 min past 3', '20 min past 3', '22 min past 3'],
          correctAnswer: '18 min past 3'
      },
      {
          question: 'What is the angle between the hour and minute hands at 12:15?',
          options: ['52.5°', '45°', '60°', '30°'],
          correctAnswer: '52.5°'
      },
      {
          question: 'The hands of a clock coincide how many times in a 12-hour period?',
          options: ['10 times', '11 times', '12 times', '13 times'],
          correctAnswer: '11 times'
      }
    
        ],
        // 'Average': [],
        // 'Area': [],
        // 'Volume and Surface Area': [],
        // 'Permutation and Combination': [],
        // 'Numbers': [],
        // 'Problems on Numbers': [],
        // 'Problems on H.C.F and L.C.M': [],
        // 'Decimal Fraction': [],
        // 'Simplification': [],
        // 'Square Root and Cube Root': [],
        // 'Surds and Indices': [],
        // 'Ratio and Proportion': [],
        // 'Chain Rule': [],
        // 'Pipes and Cistern': [],
        // 'Boats and Streams': [],
        // 'Alligation or Mixture': [],
        // 'Logarithm': [],
        // 'Races and Games': [],
        // 'Stocks and Shares': [],
        // 'Probability': [],
        // 'True Discount': [],
        // "Banker's Discount": [],
        // 'Odd Man Out and Series': [],
        'Average': [
        {
            question: 'The average of 5, 10, and x is 12. What is the value of x?',
            options: ['14', '15', '16', '17'],
            correctAnswer: '14'
        },
        {
            question: 'The average of 7 numbers is 20. If one number is excluded, the average becomes 19. What is the excluded number?',
            options: ['25', '26', '27', '28'],
            correctAnswer: '25'
        },
        {
            question: 'The average of 8 test scores is 85. If the highest score is removed, the average becomes 82. What was the highest score?',
            options: ['91', '92', '93', '94'],
            correctAnswer: '91'
        },
        {
            question: 'The average weight of 6 boys is 50 kg. If 2 more boys join, making the average weight 55 kg, what is the total weight of the 2 new boys?',
            options: ['70 kg', '80 kg', '90 kg', '100 kg'],
            correctAnswer: '90 kg'
        },
        {
            question: 'If the average age of a family of 5 is 30 years, what is their total age?',
            options: ['120 years', '130 years', '140 years', '150 years'],
            correctAnswer: '150 years'
        },
        {
            question: 'The average score of a student in 5 subjects is 75. If he scores 80 in the 6th subject, what will be his new average?',
            options: ['76', '77', '78', '79'],
            correctAnswer: '76'
        },
        {
            question: 'The average of 10 numbers is 15. If one number is increased by 5, what is the new average?',
            options: ['15.5', '16', '16.5', '17'],
            correctAnswer: '15.5'
        },
        {
            question: 'Three friends have an average height of 160 cm. If one friend is 150 cm tall, what is the average height of the other two?',
            options: ['165 cm', '170 cm', '175 cm', '180 cm'],
            correctAnswer: '165 cm'
        },
        {
            question: 'The average of 4 numbers is 25. If one number is 30, what is the average of the other three?',
            options: ['20', '22', '25', '28'],
            correctAnswer: '22'
        },
        {
            question: 'A class has 20 students with an average score of 70. If 5 new students join with an average score of 80, what is the new average?',
            options: ['72', '74', '76', '78'],
            correctAnswer: '72'
        }
    ],
    'Area': [
        {
            question: 'What is the area of a rectangle with length 10 cm and width 5 cm?',
            options: ['50 cm²', '55 cm²', '60 cm²', '65 cm²'],
            correctAnswer: '50 cm²'
        },
        {
            question: 'A triangle has a base of 12 cm and a height of 5 cm. What is its area?',
            options: ['30 cm²', '40 cm²', '60 cm²', '70 cm²'],
            correctAnswer: '30 cm²'
        },
        {
            question: 'What is the area of a circle with a radius of 7 cm? (Use π = 22/7)',
            options: ['154 cm²', '144 cm²', '164 cm²', '174 cm²'],
            correctAnswer: '154 cm²'
        },
        {
            question: 'If the area of a square is 64 cm², what is the length of one side?',
            options: ['6 cm', '7 cm', '8 cm', '9 cm'],
            correctAnswer: '8 cm'
        },
        {
            question: 'What is the area of a trapezium with bases 8 cm and 5 cm, and height 4 cm?',
            options: ['26 cm²', '30 cm²', '32 cm²', '35 cm²'],
            correctAnswer: '26 cm²'
        },
        {
            question: 'The area of a parallelogram is 48 cm², and its base is 12 cm. What is its height?',
            options: ['4 cm', '6 cm', '8 cm', '10 cm'],
            correctAnswer: '4 cm'
        },
        {
            question: 'What is the area of a rectangle if its length is 12 m and breadth is 3 m?',
            options: ['36 m²', '40 m²', '42 m²', '44 m²'],
            correctAnswer: '36 m²'
        },
        {
            question: 'A circular garden has a diameter of 10 m. What is its area?',
            options: ['78.5 m²', '80 m²', '82.5 m²', '85 m²'],
            correctAnswer: '78.5 m²'
        },
        {
            question: 'What is the area of a sector with a radius of 5 cm and a central angle of 60 degrees?',
            options: ['13.09 cm²', '14.32 cm²', '15.70 cm²', '16.18 cm²'],
            correctAnswer: '13.09 cm²'
        },
        {
            question: 'If the area of a rectangle is 120 cm² and its length is 10 cm, what is the breadth?',
            options: ['11 cm', '12 cm', '13 cm', '14 cm'],
            correctAnswer: '12 cm'
        }
    ],
    'Volume and Surface Area': [
        {
            question: 'What is the volume of a cube with side length 4 cm?',
            options: ['48 cm³', '64 cm³', '72 cm³', '80 cm³'],
            correctAnswer: '64 cm³'
        },
        {
            question: 'What is the surface area of a sphere with a radius of 3 cm? (Use π = 3.14)',
            options: ['56.52 cm²', '32.76 cm²', '39.24 cm²', '50.24 cm²'],
            correctAnswer: '56.52 cm²'
        },
        {
            question: 'A cylinder has a radius of 5 cm and a height of 10 cm. What is its volume?',
            options: ['250 cm³', '300 cm³', '350 cm³', '400 cm³'],
            correctAnswer: '250 cm³'
        },
        {
            question: 'What is the surface area of a cone with radius 3 cm and slant height 5 cm?',
            options: ['50.24 cm²', '25.12 cm²', '30.00 cm²', '40.00 cm²'],
            correctAnswer: '50.24 cm²'
        },
        {
            question: 'The volume of a rectangular prism is 120 cm³, and its height is 5 cm. What is the area of the base?',
            options: ['20 cm²', '24 cm²', '30 cm²', '36 cm²'],
            correctAnswer: '24 cm²'
        },
        {
            question: 'What is the volume of a sphere with a radius of 7 cm? (Use π = 22/7)',
            options: ['1436 cm³', '1480 cm³', '1500 cm³', '1550 cm³'],
            correctAnswer: '1436 cm³'
        },
        {
            question: 'A cuboid has dimensions 4 cm × 5 cm × 6 cm. What is its volume?',
            options: ['120 cm³', '100 cm³', '90 cm³', '80 cm³'],
            correctAnswer: '120 cm³'
        },
        {
            question: 'What is the total surface area of a cylinder with radius 3 cm and height 7 cm? (Use π = 3.14)',
            options: ['188.4 cm²', '180.4 cm²', '190.4 cm²', '200.4 cm²'],
            correctAnswer: '188.4 cm²'
        },
        {
            question: 'What is the surface area of a cube with side length 5 cm?',
            options: ['125 cm²', '150 cm²', '175 cm²', '200 cm²'],
            correctAnswer: '150 cm²'
        },
        {
            question: 'If the volume of a cone is 30 cm³ and the height is 5 cm, what is the radius?',
            options: ['2 cm', '3 cm', '4 cm', '5 cm'],
            correctAnswer: '3 cm'
        }
    ],
    'Permutation and Combination': [
        {
            question: 'How many ways can 3 books be arranged on a shelf?',
            options: ['3', '6', '9', '12'],
            correctAnswer: '6'
        },
        {
            question: 'In how many ways can 5 people be seated in a row?',
            options: ['60', '120', '240', '720'],
            correctAnswer: '120'
        },
        {
            question: 'How many ways can you choose 2 fruits from 5 different fruits?',
            options: ['5', '10', '20', '25'],
            correctAnswer: '10'
        },
        {
            question: 'In how many ways can a committee of 3 be formed from 7 people?',
            options: ['21', '35', '42', '49'],
            correctAnswer: '35'
        },
        {
            question: 'How many different ways can the letters of the word "BOOK" be arranged?',
            options: ['12', '18', '24', '36'],
            correctAnswer: '12'
        },
        {
            question: 'How many ways can 4 students be selected from a class of 10?',
            options: ['210', '360', '120', '2100'],
            correctAnswer: '210'
        },
        {
            question: 'How many ways can you arrange the letters of the word "MATHS"?',
            options: ['60', '120', '180', '240'],
            correctAnswer: '120'
        },
        {
            question: 'In how many ways can 5 different books be placed on a shelf?',
            options: ['120', '100', '90', '60'],
            correctAnswer: '120'
        },
        {
            question: 'How many ways can 3 letters be chosen from the word "APPLE"?',
            options: ['10', '15', '20', '25'],
            correctAnswer: '10'
        }
    ],
    'Numbers': [
        {
            question: 'What is the smallest prime number?',
            options: ['1', '2', '3', '4'],
            correctAnswer: '2'
        },
        {
            question: 'What is the sum of the first 10 natural numbers?',
            options: ['45', '55', '65', '75'],
            correctAnswer: '55'
        },
        {
            question: 'Which of the following is an odd number?',
            options: ['12', '14', '16', '19'],
            correctAnswer: '19'
        },
        {
            question: 'What is the least common multiple (LCM) of 4 and 6?',
            options: ['12', '24', '20', '18'],
            correctAnswer: '12'
        },
        {
            question: 'What is the greatest common divisor (GCD) of 16 and 24?',
            options: ['2', '4', '6', '8'],
            correctAnswer: '8'
        },
        {
            question: 'If 5 is added to a number, the result is 12. What is the number?',
            options: ['7', '8', '9', '10'],
            correctAnswer: '7'
        },
        {
            question: 'What is the next number in the series 2, 4, 8, 16, ...?',
            options: ['20', '24', '32', '36'],
            correctAnswer: '32'
        },
        {
            question: 'What is 25% of 200?',
            options: ['25', '50', '75', '100'],
            correctAnswer: '50'
        },
        {
            question: 'If a number is multiplied by 3 and then reduced by 5, the result is 10. What is the number?',
            options: ['5', '6', '7', '8'],
            correctAnswer: '5'
        },
        {
            question: 'How many prime numbers are there between 1 and 20?',
            options: ['6', '7', '8', '9'],
            correctAnswer: '8'
        }
    ],
    'Problems on Numbers': [
        {
            question: 'If the sum of two numbers is 30 and their difference is 10, what are the numbers?',
            options: ['20 and 10', '15 and 15', '25 and 5', '18 and 12'],
            correctAnswer: '20 and 10'
        },
        {
            question: 'A number is divided by 7 and leaves a remainder of 3. What is the number?',
            options: ['10', '24', '17', '25'],
            correctAnswer: '24'
        },
        {
            question: 'If a number is decreased by 8, the result is 5. What is the number?',
            options: ['12', '13', '14', '15'],
            correctAnswer: '13'
        },
        {
            question: 'If the product of two numbers is 48 and one of the numbers is 4, what is the other number?',
            options: ['8', '10', '12', '14'],
            correctAnswer: '12'
        },
        {
            question: 'If a number is increased by 25% and the result is 50, what is the original number?',
            options: ['35', '40', '45', '48'],
            correctAnswer: '40'
        },
        {
            question: 'What is the least number which when divided by 6, 8, and 10 leaves a remainder of 4?',
            options: ['34', '64', '74', '84'],
            correctAnswer: '64'
        },
        {
            question: 'A number is 5 more than another number. If the smaller number is x, what is the larger number?',
            options: ['x + 5', 'x - 5', 'x * 5', '5 - x'],
            correctAnswer: 'x + 5'
        },
        {
            question: 'What is the square of 9?',
            options: ['81', '72', '90', '99'],
            correctAnswer: '81'
        },
        {
            question: 'If the sum of three consecutive integers is 36, what are the integers?',
            options: ['11, 12, 13', '10, 11, 12', '12, 13, 14', '13, 14, 15'],
            correctAnswer: '11, 12, 13'
        },
        {
            question: 'A number is doubled and then increased by 3 to give 15. What is the number?',
            options: ['5', '6', '7', '8'],
            correctAnswer: '6'
        }
    ],
    'Problems on H.C.F and L.C.M': [
        {
            question: 'What is the HCF of 12 and 15?',
            options: ['3', '5', '15', '12'],
            correctAnswer: '3'
        },
        {
            question: 'The LCM of two numbers is 36 and their HCF is 6. What are the two numbers?',
            options: ['12 and 18', '9 and 4', '6 and 24', '3 and 36'],
            correctAnswer: '12 and 18'
        },
        {
            question: 'Find the HCF of 24, 36, and 60.',
            options: ['6', '12', '18', '24'],
            correctAnswer: '12'
        },
        {
            question: 'What is the LCM of 8 and 12?',
            options: ['24', '32', '36', '48'],
            correctAnswer: '24'
        },
        {
            question: 'If the HCF of two numbers is 4 and their product is 64, what are the two numbers?',
            options: ['8 and 16', '4 and 16', '2 and 32', '4 and 64'],
            correctAnswer: '8 and 16'
        },
        {
            question: 'What is the HCF of 18 and 24?',
            options: ['2', '3', '6', '12'],
            correctAnswer: '6'
        },
        {
            question: 'The LCM of two numbers is 45 and one of the numbers is 9. What is the other number?',
            options: ['5', '9', '15', '20'],
            correctAnswer: '5'
        },
        {
            question: 'What is the LCM of 10, 15, and 20?',
            options: ['30', '60', '40', '90'],
            correctAnswer: '60'
        },
        {
            question: 'If the HCF of two numbers is 1, then they are said to be:',
            options: ['Even', 'Odd', 'Co-prime', 'Multiple'],
            correctAnswer: 'Co-prime'
        },
        {
            question: 'The HCF of 45 and 75 is:',
            options: ['5', '15', '10', '20'],
            correctAnswer: '15'
        }
    ],
    'Decimal Fraction': [
        {
            question: 'What is 0.75 as a fraction?',
            options: ['3/4', '1/4', '1/2', '1/3'],
            correctAnswer: '3/4'
        },
        {
            question: 'Convert 2.5 into a fraction.',
            options: ['2/5', '5/2', '25/10', '10/4'],
            correctAnswer: '5/2'
        },
        {
            question: 'What is the decimal equivalent of 1/8?',
            options: ['0.125', '0.1255', '0.12', '0.1'],
            correctAnswer: '0.125'
        },
        {
            question: 'If 0.6 is expressed as a fraction, what is?',
            options: ['3/5', '1/5', '2/3', '5/3'],
            correctAnswer: '3/5'
        },
        {
            question: 'What is 0.2 as a fraction in its simplest form?',
            options: ['1/5', '1/10', '2/5', '1/20'],
            correctAnswer: '1/5'
        },
        {
            question: 'Convert the fraction 4/5 into a decimal.',
            options: ['0.4', '0.5', '0.8', '0.6'],
            correctAnswer: '0.8'
        },
        {
            question: 'What is the decimal equivalent of 3/10?',
            options: ['0.3', '0.4', '0.5', '0.6'],
            correctAnswer: '0.3'
        },
        {
            question: 'Express 0.125 as a fraction.',
            options: ['1/8', '2/15', '3/25', '4/20'],
            correctAnswer: '1/8'
        },
        {
            question: 'What is the sum of 0.5 and 0.25?',
            options: ['0.7', '0.75', '0.8', '0.85'],
            correctAnswer: '0.75'
        },
        {
            question: 'What is 0.01 as a fraction?',
            options: ['1/100', '1/10', '1/1000', '1/50'],
            correctAnswer: '1/100'
        }
    ],
    'Simplification': [
        {
            question: 'Simplify: 3(2x + 5) - 4x.',
            options: ['6x + 15', '-x + 15', '2x + 15', '2x + 10'],
            correctAnswer: '-x + 15'
        },
        {
            question: 'Simplify: 5x - 2x + 3.',
            options: ['3x + 3', '2x + 3', '7x + 3', '8x - 3'],
            correctAnswer: '3x + 3'
        },
        {
            question: 'Simplify: 4(3x - 2) + 2(4x + 1).',
            options: ['18x - 6', '16x + 2', '20x - 6', '16x - 6'],
            correctAnswer: '16x - 6'
        },
        {
            question: 'Simplify: (2x + 3) + (4x - 5).',
            options: ['6x - 2', '6x + 2', '2x - 2', '2x + 2'],
            correctAnswer: '6x - 2'
        },
        {
            question: 'Simplify: 7a - 4(a + 2).',
            options: ['-a - 8', '3a - 8', '3a + 8', '7a - 8'],
            correctAnswer: '-a - 8'
        },
        {
            question: 'Simplify: 8x - 3(2x - 1).',
            options: ['2x + 3', '2x - 3', '5x + 3', '5x - 3'],
            correctAnswer: '2x + 3'
        },
        {
            question: 'Simplify: 10 - 2(3 + x).',
            options: ['4 - 2x', '4 + 2x', '6 - 2x', '8 - 2x'],
            correctAnswer: '4 - 2x'
        },
        {
            question: 'Simplify: 6(2x + 1) - 3(4x - 2).',
            options: ['6x + 12', '3x + 12', '12 - 6x', '12 - 6x'],
            correctAnswer: '12 - 6x'
        },
        {
            question: 'Simplify: 5x + 3x - 4.',
            options: ['8x - 4', '2x - 4', '2x + 4', '4x - 4'],
            correctAnswer: '8x - 4'
        }
    ],
    'Square Root and Cube Root': [
        {
            question: 'What is the square root of 49?',
            options: ['6', '7', '8', '9'],
            correctAnswer: '7'
        },
        {
            question: 'What is the cube root of 27?',
            options: ['3', '4', '5', '6'],
            correctAnswer: '3'
        },
        {
            question: 'What is the square root of 144?',
            options: ['10', '11', '12', '13'],
            correctAnswer: '12'
        },
        {
            question: 'What is the cube root of 64?',
            options: ['3', '4', '5', '6'],
            correctAnswer: '4'
        },
        {
            question: 'What is the value of √36 + √16?',
            options: ['10', '12', '14', '16'],
            correctAnswer: '14'
        },
        {
            question: 'If x² = 49, what is the value of x?',
            options: ['7', '14', '3', '0'],
            correctAnswer: '7'
        },
        {
            question: 'What is the square root of 0.04?',
            options: ['0.2', '0.4', '0.5', '0.6'],
            correctAnswer: '0.2'
        },
        {
            question: 'What is the cube root of 1?',
            options: ['0', '1', '2', '3'],
            correctAnswer: '1'
        },
        {
            question: 'What is the square root of 81?',
            options: ['7', '8', '9', '10'],
            correctAnswer: '9'
        },
        {
            question: 'What is the cube root of 8?',
            options: ['2', '3', '4', '5'],
            correctAnswer: '2'
        }
    ],
    'Surds and Indices': [
        {
            question: 'What is √(16)?',
            options: ['4', '3', '2', '5'],
            correctAnswer: '4'
        },
        {
            question: 'What is the value of (2^3)?',
            options: ['4', '6', '8', '10'],
            correctAnswer: '8'
        },
        {
            question: 'Simplify: √(25) + √(16).',
            options: ['6', '8', '10', '12'],
            correctAnswer: '10'
        },
        {
            question: 'What is the value of (3^2)?',
            options: ['6', '7', '8', '9'],
            correctAnswer: '9'
        },
        {
            question: 'Simplify: √(x²).',
            options: ['x', 'x²', '2x', 'x^2'],
            correctAnswer: 'x'
        },
        {
            question: 'What is the value of (5^0)?',
            options: ['0', '1', '5', '25'],
            correctAnswer: '1'
        },
        {
            question: 'What is √(81) + √(4)?',
            options: ['10', '12', '14', '16'],
            correctAnswer: '14'
        },
        {
            question: 'Simplify: (2^4) ÷ (2^2).',
            options: ['2^2', '2^3', '2^4', '2^5'],
            correctAnswer: '2^2'
        },
        {
            question: 'What is the value of (10^2)?',
            options: ['100', '200', '300', '400'],
            correctAnswer: '100'
        },
        {
            question: 'What is the value of (4^3) ÷ (4^2)?',
            options: ['4', '8', '16', '64'],
            correctAnswer: '4'
        }
    ],
    'Ratio and Proportion': [
        {
            question: 'What is the ratio of 20 to 30?',
            options: ['2:3', '3:2', '1:1', '4:5'],
            correctAnswer: '2:3'
        },
        {
            question: 'If a:b = 2:3 and b:c = 3:4, what is a:c?',
            options: ['2:4', '3:4', '8:9', '2:5'],
            correctAnswer: '2:5'
        },
        {
            question: 'In a bag, the ratio of red balls to blue balls is 3:5. If there are 15 red balls, how many blue balls are there?',
            options: ['20', '25', '30', '35'],
            correctAnswer: '25'
        },
        {
            question: 'If the ratio of boys to girls in a class is 4:5 and there are 36 boys, how many girls are there?',
            options: ['45', '40', '36', '30'],
            correctAnswer: '45'
        },
        {
            question: 'What is the proportion of 1:2 to 3:6?',
            options: ['1:3', '1:2', '1:1', '1:4'],
            correctAnswer: '1:1'
        },
        {
            question: 'A recipe requires sugar and flour in a ratio of 1:4. If you use 2 cups of sugar, how many cups of flour will you need?',
            options: ['6', '8', '10', '4'],
            correctAnswer: '8'
        },
        {
            question: 'If 5 men can do a piece of work in 10 days, how many days will it take 10 men to do the same work?',
            options: ['5', '10', '15', '20'],
            correctAnswer: '5'
        },
        {
            question: 'If the ratio of the ages of A and B is 3:4 and A is 12 years old, how old is B?',
            options: ['16', '14', '18', '12'],
            correctAnswer: '16'
        },
        {
            question: 'What is the ratio of the circumference to the diameter of a circle?',
            options: ['3.14', 'π', '1', '2'],
            correctAnswer: 'π'
        },
        {
            question: 'A and B are in the ratio 2:3. If A = 10, what is the value of B?',
            options: ['15', '20', '25', '30'],
            correctAnswer: '15'
        }
    ],
    'Chain Rule': [
        {
            question: 'If 1 kg of rice costs $20, how much would 5 kg cost?',
            options: ['$80', '$60', '$100', '$120'],
            correctAnswer: '$100'
        },
        {
            question: 'If 3 pens cost $12, how much do 5 pens cost?',
            options: ['$15', '$18', '$20', '$10'],
            correctAnswer: '$20'
        },
        {
            question: 'If 4 apples cost $8, how much would 10 apples cost?',
            options: ['$20', '$25', '$30', '$15'],
            correctAnswer: '$20'
        },
        {
            question: 'If 5 meters of cloth costs $25, how much will 8 meters cost?',
            options: ['$40', '$45', '$50', '$55'],
            correctAnswer: '$40'
        },
        {
            question: 'If 6 oranges cost $3, how much do 15 oranges cost?',
            options: ['$5', '$6', '$7', '$4'],
            correctAnswer: '$7.50'
        },
        {
            question: 'If 2 kg of sugar costs $6, how much will 10 kg cost?',
            options: ['$30', '$20', '$25', '$35'],
            correctAnswer: '$30'
        },
        {
            question: 'If 1 liter of milk costs $1.50, how much would 10 liters cost?',
            options: ['$10', '$15', '$20', '$25'],
            correctAnswer: '$15'
        },
        {
            question: 'If 5 books cost $50, how much will 12 books cost?',
            options: ['$120', '$100', '$90', '$80'],
            correctAnswer: '$120'
        },
        {
            question: 'If 8 pencils cost $4, how much do 20 pencils cost?',
            options: ['$10', '$12', '$8', '$6'],
            correctAnswer: '$10'
        },
        {
            question: 'If 3 kg of meat costs $21, how much will 5 kg cost?',
            options: ['$35', '$30', '$40', '$50'],
            correctAnswer: '$35'
        }
    ],
    'Pipes and Cistern': [
        {
            question: 'If a pipe can fill a tank in 6 hours, how much of the tank will it fill in 1 hour?',
            options: ['1/6', '1/4', '1/2', '1/3'],
            correctAnswer: '1/6'
        },
        {
            question: 'Two pipes can fill a tank in 10 hours and 15 hours respectively. How long will both pipes take to fill the tank together?',
            options: ['6 hours', '8 hours', '5 hours', '4 hours'],
            correctAnswer: '6 hours'
        },
        {
            question: 'A tank is filled by two pipes in 5 and 8 hours respectively. How long will they take to fill the tank together?',
            options: ['3.2 hours', '4.2 hours', '5.2 hours', '6.2 hours'],
            correctAnswer: '3.2 hours'
        },
        {
            question: 'A pipe can fill a tank in 12 hours and another pipe can empty it in 15 hours. If both pipes are open together, how long will it take to fill the tank?',
            options: ['60 hours', '75 hours', '100 hours', '120 hours'],
            correctAnswer: '60 hours'
        },
        {
            question: 'If one pipe fills a tank in 8 hours and another in 10 hours, how long will they take to fill the tank together?',
            options: ['4.5 hours', '5 hours', '6 hours', '7 hours'],
            correctAnswer: '4.5 hours'
        },
        {
            question: 'A tank can be filled by a pipe in 3 hours. How long will it take to fill it using 3 such pipes?',
            options: ['1 hour', '2 hours', '3 hours', '4 hours'],
            correctAnswer: '1 hour'
        },
        {
            question: 'A pipe fills a tank in 5 hours and a second pipe empties it in 8 hours. How long will it take to fill the tank if both are open?',
            options: ['15 hours', '10 hours', '20 hours', '5 hours'],
            correctAnswer: '15 hours'
        },
        {
            question: 'Two pipes can fill a tank in 20 minutes and 30 minutes respectively. How long will it take for both to fill the tank together?',
            options: ['12 minutes', '15 minutes', '18 minutes', '10 minutes'],
            correctAnswer: '12 minutes'
        },
        {
            question: 'A cistern has 3 pipes. The first can fill it in 10 hours, the second in 20 hours, and the third in 15 hours. How long will they take to fill it together?',
            options: ['5 hours', '6 hours', '7 hours', '8 hours'],
            correctAnswer: '5 hours'
        }
    ],
    'Boats and Streams': [
        {
            question: 'A boat can go upstream at 10 km/h and downstream at 15 km/h. What is the speed of the boat in still water?',
            options: ['12.5 km/h', '13 km/h', '10 km/h', '11 km/h'],
            correctAnswer: '12.5 km/h'
        },
        {
            question: 'If a boat covers a distance of 30 km downstream in 2 hours, what is the speed of the boat?',
            options: ['15 km/h', '10 km/h', '12 km/h', '20 km/h'],
            correctAnswer: '15 km/h'
        },
        {
            question: 'If the speed of a boat in still water is 12 km/h and the speed of the stream is 3 km/h, what is the speed of the boat upstream?',
            options: ['9 km/h', '12 km/h', '15 km/h', '18 km/h'],
            correctAnswer: '9 km/h'
        },
        {
            question: 'A boat can go 20 km downstream in 2 hours. What is the speed of the stream?',
            options: ['5 km/h', '10 km/h', '15 km/h', '20 km/h'],
            correctAnswer: '10 km/h'
        },
        {
            question: 'If a boat takes 4 hours to go 40 km upstream, what is the speed of the boat?',
            options: ['10 km/h', '15 km/h', '20 km/h', '25 km/h'],
            correctAnswer: '10 km/h'
        },
        {
            question: 'A boat travels downstream at a speed of 18 km/h and returns upstream at 12 km/h. What is the average speed for the entire journey?',
            options: ['14 km/h', '15 km/h', '16 km/h', '17 km/h'],
            correctAnswer: '14.4 km/h'
        },
        {
            question: 'A boat takes 3 hours to go upstream 15 km. What is the speed of the stream?',
            options: ['2 km/h', '3 km/h', '4 km/h', '5 km/h'],
            correctAnswer: '5 km/h'
        },
        {
            question: 'If a boat can go upstream at 5 km/h and downstream at 15 km/h, what is the speed of the stream?',
            options: ['5 km/h', '10 km/h', '15 km/h', '20 km/h'],
            correctAnswer: '5 km/h'
        },
        {
            question: 'A boat takes 1 hour to travel 12 km downstream. What is the speed of the boat in still water?',
            options: ['12 km/h', '6 km/h', '10 km/h', '15 km/h'],
            correctAnswer: '12 km/h'
        }
    ],
    'Alligation or Mixture': [
        {
            question: 'If the price of a mixture of 30 kg of rice at $20/kg and 20 kg of rice at $30/kg, what is the price per kg of the mixture?',
            options: ['$25/kg', '$30/kg', '$20/kg', '$15/kg'],
            correctAnswer: '$25/kg'
        },
        {
            question: 'In a mixture of two types of tea costing $50/kg and $70/kg, what ratio should they be mixed to obtain a mixture worth $60/kg?',
            options: ['1:2', '2:1', '1:1', '3:2'],
            correctAnswer: '1:1'
        },
        {
            question: 'If 10 liters of a 50% alcohol solution is mixed with 10 liters of a 30% alcohol solution, what is the percentage of alcohol in the mixture?',
            options: ['40%', '45%', '50%', '55%'],
            correctAnswer: '40%'
        },
        {
            question: 'A mixture of 20 kg of sugar at $10/kg and 30 kg of sugar at $20/kg. What is the average price per kg of the mixture?',
            options: ['$15/kg', '$20/kg', '$25/kg', '$30/kg'],
            correctAnswer: '$15/kg'
        },
        {
            question: 'If two liquids are mixed in the ratio of 2:3 and cost $20 and $30 per liter respectively, what is the cost of the mixture per liter?',
            options: ['$25', '$28', '$27', '$30'],
            correctAnswer: '$26'
        },
        {
            question: 'In what ratio should two alloys of gold costing $200/g and $300/g be mixed to get a mixture worth $250/g?',
            options: ['1:1', '1:2', '2:1', '3:2'],
            correctAnswer: '1:2'
        },
        {
            question: 'If 3 kg of nuts costing $50/kg are mixed with 2 kg of nuts costing $70/kg, what is the average cost per kg of the mixture?',
            options: ['$60/kg', '$65/kg', '$70/kg', '$75/kg'],
            correctAnswer: '$60/kg'
        },
        {
            question: 'A mixture contains 25% fruit juice and 75% water. How much fruit juice is in 4 liters of the mixture?',
            options: ['1 L', '1.5 L', '2 L', '3 L'],
            correctAnswer: '1 L'
        },
        {
            question: 'What is the ratio of water to alcohol if a mixture contains 40% alcohol?',
            options: ['2:3', '3:2', '1:2', '4:1'],
            correctAnswer: '3:2'
        },
        {
            question: 'If a mixture consists of 30% A and 70% B, how much A is in 5 kg of the mixture?',
            options: ['1 kg', '1.5 kg', '2 kg', '3 kg'],
            correctAnswer: '1.5 kg'
        }
    ],
    'Logarithm': [
        {
            question: 'What is log(100) to base 10?',
            options: ['2', '1', '3', '0'],
            correctAnswer: '2'
        },
        {
            question: 'What is the value of log(1) to any base?',
            options: ['0', '1', 'undefined', 'infinity'],
            correctAnswer: '0'
        },
        {
            question: 'If log(x) = 2, what is the value of x?',
            options: ['100', '10', '1', '0.01'],
            correctAnswer: '100'
        },
        {
            question: 'What is log(10^3) to base 10?',
            options: ['1', '3', '10', '100'],
            correctAnswer: '3'
        },
        {
            question: 'What is the change of base formula for logarithms?',
            options: ['log_a(b) = log_c(b)/log_c(a)', 'log_a(b) = log_b(a)', 'log_a(b) = log_c(a)/log_c(b)', 'log_a(b) = log_a(b)'],
            correctAnswer: 'log_a(b) = log_c(b)/log_c(a)'
        },
        {
            question: 'What is log(10) to base 10?',
            options: ['0', '1', '10', '2'],
            correctAnswer: '1'
        },
        {
            question: 'If log(4) = x, what is log(16)?',
            options: ['2x', '4x', 'x/2', 'x/4'],
            correctAnswer: '2x'
        },
        {
            question: 'What is the value of log(2) + log(4)?',
            options: ['3', '2', '1', '4'],
            correctAnswer: '3'
        },
        {
            question: 'What is the value of log(0.01) to base 10?',
            options: ['-2', '2', '0', '1'],
            correctAnswer: '-2'
        },
        {
            question: 'If log_2(x) = 5, what is the value of x?',
            options: ['10', '16', '32', '64'],
            correctAnswer: '32'
        }
    ],
    'Races and Games': [
        {
            question: 'If A can complete a race in 10 minutes and B in 15 minutes, how much time will they take to complete the race together?',
            options: ['6 min', '10 min', '7 min', '5 min'],
            correctAnswer: '6 min'
        },
        {
            question: 'A can run 100 m in 12 seconds and B can run the same distance in 15 seconds. What is the ratio of their speeds?',
            options: ['5:4', '4:5', '3:2', '2:3'],
            correctAnswer: '5:4'
        },
        {
            question: 'If A can finish a job in 20 days and B can do it in 30 days, how long will it take both working together?',
            options: ['12 days', '15 days', '10 days', '18 days'],
            correctAnswer: '12 days'
        },
        {
            question: 'A train leaves station A and travels at 60 km/h. Another train leaves station B 30 minutes later and travels at 90 km/h. How far from station A will they meet?',
            options: ['120 km', '150 km', '90 km', '100 km'],
            correctAnswer: '120 km'
        },
        {
            question: 'Two cars start from the same point and travel in opposite directions at speeds of 60 km/h and 80 km/h. How far apart will they be after 2 hours?',
            options: ['240 km', '220 km', '200 km', '300 km'],
            correctAnswer: '240 km'
        },
        {
            question: 'If A can run a race in 30 seconds and B can run the same race in 45 seconds, what is the difference in their times?',
            options: ['15 sec', '10 sec', '20 sec', '5 sec'],
            correctAnswer: '15 sec'
        },
        {
            question: 'A and B can complete a work in 20 days and 30 days respectively. How long will they take to complete the work together?',
            options: ['12 days', '18 days', '15 days', '10 days'],
            correctAnswer: '12 days'
        },
        {
            question: 'If a person can walk at 4 km/h, how long will it take to walk 8 km?',
            options: ['1.5 hours', '2 hours', '3 hours', '4 hours'],
            correctAnswer: '2 hours'
        },
        {
            question: 'If A is twice as fast as B, and B can complete a race in 40 minutes, how long will A take to complete the same race?',
            options: ['20 min', '30 min', '40 min', '50 min'],
            correctAnswer: '20 min'
        }
    ],
    'Stocks and Shares': [
        {
            question: 'If a stock is bought at $100 and sold at $120, what is the profit percentage?',
            options: ['20%', '25%', '30%', '15%'],
            correctAnswer: '20%'
        },
        {
            question: 'A share is purchased for $80 and sold for $100. What is the gain in percentage?',
            options: ['25%', '20%', '30%', '15%'],
            correctAnswer: '25%'
        },
        {
            question: 'If an investor buys 50 shares at $30 each and sells them for $40 each, what is the total profit?',
            options: ['$500', '$600', '$700', '$800'],
            correctAnswer: '$500'
        },
        {
            question: 'If a company offers a dividend of 10% on a share worth $50, what is the dividend amount?',
            options: ['$2', '$5', '$7', '$10'],
            correctAnswer: '$5'
        },
        {
            question: 'If an investor buys 100 shares at $10 and sells them at $12, what is the profit percentage?',
            options: ['20%', '25%', '30%', '15%'],
            correctAnswer: '20%'
        },
        {
            question: 'If the cost price of a stock is $50 and it is sold for $75, what is the profit percentage?',
            options: ['30%', '25%', '40%', '50%'],
            correctAnswer: '50%'
        },
        {
            question: 'If a stock is bought at $60 and sold for $72, what is the percentage gain?',
            options: ['15%', '20%', '25%', '30%'],
            correctAnswer: '20%'
        },
        {
            question: 'If a company pays a dividend of $4 on a stock worth $40, what is the dividend yield?',
            options: ['10%', '12%', '8%', '6%'],
            correctAnswer: '10%'
        },
        {
            question: 'If an investor purchases 100 shares at $20 and sells them for $30, what is the total profit?',
            options: ['$1000', '$800', '$500', '$200'],
            correctAnswer: '$1000'
        },
        {
            question: 'If a stock is bought for $200 and sold for $220, what is the profit percentage?',
            options: ['10%', '15%', '20%', '25%'],
            correctAnswer: '10%'
        },
    ],
        'Probability': [
    {
        question: 'What is the probability of rolling a sum of 7 with two dice?',
        options: ['1/6', '1/12', '1/36', '5/36'],
        correctAnswer: '1/6'
    },
    {
        question: 'If you draw one card from a standard deck of 52 cards, what is the probability of drawing an Ace?',
        options: ['1/13', '1/52', '1/26', '1/4'],
        correctAnswer: '1/13'
    },
    {
        question: 'What is the probability of flipping a coin and getting heads?',
        options: ['1/2', '1/3', '1/4', '1/5'],
        correctAnswer: '1/2'
    },
    {
        question: 'A bag contains 5 red balls and 3 blue balls. What is the probability of picking a blue ball?',
        options: ['3/8', '5/8', '1/2', '3/5'],
        correctAnswer: '3/8'
    },
    {
        question: 'What is the probability of drawing a heart from a standard deck of cards?',
        options: ['1/4', '1/13', '1/26', '1/2'],
        correctAnswer: '1/4'
    },
    {
        question: 'If a box contains 10 light bulbs, 2 of which are defective, what is the probability of selecting a non-defective bulb?',
        options: ['4/5', '8/10', '2/5', '1/5'],
        correctAnswer: '4/5'
    },
    {
        question: 'In a class of 30 students, 18 are boys. What is the probability of randomly selecting a girl?',
        options: ['2/5', '1/3', '1/5', '3/5'],
        correctAnswer: '2/5'
    },
    {
        question: 'What is the probability of getting a sum of 9 when rolling two dice?',
        options: ['1/6', '1/12', '4/36', '5/36'],
        correctAnswer: '4/36'
    },
    {
        question: 'In a family with two children, what is the probability that both children are girls?',
        options: ['1/4', '1/3', '1/2', '1/5'],
        correctAnswer: '1/4'
    },
    {
        question: 'What is the probability of picking a vowel from the English alphabet?',
        options: ['5/26', '3/26', '6/26', '1/5'],
        correctAnswer: '5/26'
    }
],
'True Discount': [
    {
        question: 'If the marked price of an article is $200 and the selling price is $160, what is the true discount?',
        options: ['$40', '$30', '$20', '$50'],
        correctAnswer: '$40'
    },
    {
        question: 'A shopkeeper gives a true discount of 10% on a product with a marked price of $500. What is the selling price?',
        options: ['$450', '$400', '$350', '$500'],
        correctAnswer: '$450'
    },
    {
        question: 'If a customer pays $270 for an item that has a true discount of 10%, what was the marked price?',
        options: ['$300', '$350', '$320', '$280'],
        correctAnswer: '$300'
    },
    {
        question: 'A product is sold for $180 after a true discount of 10%. What is the marked price?',
        options: ['$200', '$220', '$250', '$240'],
        correctAnswer: '$200'
    },
    {
        question: 'What is the true discount on an item with a marked price of $800 sold for $720?',
        options: ['$80', '$100', '$90', '$70'],
        correctAnswer: '$80'
    },
    {
        question: 'If an article costs $600 and is sold for $540, what is the true discount?',
        options: ['$60', '$50', '$40', '$30'],
        correctAnswer: '$60'
    },
    {
        question: 'A book is sold for $15 after a true discount of 25%. What is the marked price?',
        options: ['$20', '$25', '$30', '$15'],
        correctAnswer: '$20'
    },
    {
        question: 'The marked price of an item is $150 and it is sold for $135. What is the true discount?',
        options: ['$15', '$10', '$5', '$20'],
        correctAnswer: '$15'
    },
    {
        question: 'If an article with a marked price of $500 is sold for $450 after a true discount, what is the discount percentage?',
        options: ['10%', '12%', '8%', '5%'],
        correctAnswer: '10%'
    },
    {
        question: 'A seller marked an item for $240 and sold it for $216. What is the true discount?',
        options: ['$24', '$30', '$20', '$18'],
        correctAnswer: '$24'
    }
],
'Bankers Discount': [
    {
        question: 'If a sum of $500 is due after 2 years at 10% bankers discount, what is the present value?',
        options: ['$400', '$450', '$350', '$500'],
        correctAnswer: '$400'
    },
    {
        question: 'What is the bankers discount on a sum of $1000 due in 3 years at 12%?',
        options: ['$120', '$130', '$140', '$150'],
        correctAnswer: '$360'
    },
    {
        question: 'A loan of $800 is taken for 1 year at a bankers discount of 10%. What is the interest?',
        options: ['$80', '$70', '$60', '$90'],
        correctAnswer: '$80'
    },
    {
        question: 'If an amount of $600 is due after 4 years at 8% bankers discount, what is the present value?',
        options: ['$450', '$500', '$480', '$400'],
        correctAnswer: '$450'
    },
    {
        question: 'The bankers discount on a bill of $1500 due in 5 months at 6% is:',
        options: ['$15', '$30', '$45', '$60'],
        correctAnswer: '$30'
    },
    {
        question: 'If a sum of $2000 is due after 2 years at 15% bankers discount, what is the present value?',
        options: ['$1700', '$1600', '$1500', '$1800'],
        correctAnswer: '$1700'
    },
    {
        question: 'A bill of $900 is discounted at a bankers discount of 5% for 1 year. What is the bankers discount?',
        options: ['$45', '$50', '$55', '$60'],
        correctAnswer: '$45'
    },
    {
        question: 'If a sum of $1200 is due after 3 years at 5% bankers discount, what is the present value?',
        options: ['$1000', '$900', '$1100', '$800'],
        correctAnswer: '$1000'
    },
    {
        question: 'A sum of $3000 is due after 6 months at 10% bankers discount. What is the discount?',
        options: ['$150', '$200', '$250', '$100'],
        correctAnswer: '$150'
    },
    {
        question: 'If a bill of $8000 is discounted at a bankers discount of 12% for 1 year, what is the bankers discount?',
        options: ['$960', '$880', '$800', '$720'],
        correctAnswer: '$960'
    }
],
'Odd Man Out and Series': [
    {
        question: 'Find the odd one out: 2, 3, 5, 7, 9, 11',
        options: ['2', '3', '5', '9'],
        correctAnswer: '9'
    },
    {
        question: 'What is the next number in the series: 2, 4, 8, 16, ...?',
        options: ['20', '24', '32', '28'],
        correctAnswer: '32'
    },
    {
        question: 'Find the odd one out: Apple, Banana, Carrot, Grape',
        options: ['Apple', 'Banana', 'Carrot', 'Grape'],
        correctAnswer: 'Carrot'
    },
    {
        question: 'Identify the next term in the series: 5, 10, 15, 20, ...?',
        options: ['25', '30', '35', '40'],
        correctAnswer: '25'
    },
    {
        question: 'Which number does not belong: 1, 3, 5, 7, 8, 9?',
        options: ['1', '3', '5', '8'],
        correctAnswer: '8'
    },
    {
        question: 'What is the next number in the series: 1, 1, 2, 3, 5, ...?',
        options: ['6', '7', '8', '9'],
        correctAnswer: '8'
    },
    {
        question: 'Find the odd one out: Circle, Square, Triangle, Cube',
        options: ['Circle', 'Square', 'Triangle', 'Cube'],
        correctAnswer: 'Cube'
    },
    {
        question: 'What is the next number in the series: 1, 4, 9, 16, ...?',
        options: ['20', '25', '30', '36'],
        correctAnswer: '25'
    },
    {
        question: 'Identify the odd one out: Dog, Cat, Mouse, Carrot',
        options: ['Dog', 'Cat', 'Mouse', 'Carrot'],
        correctAnswer: 'Carrot'
    },
    {
        question: 'What is the next term in the series: 10, 20, 30, 40, ...?',
        options: ['45', '50', '60', '70'],
        correctAnswer: '50'
    }
],

 
      //  ]
        },
    },
    {
      name: 'Data Interpretation',
      description: 'Data and graph-based problem-solving.',
      folders: {
        'Table Charts': [
  {
    question: 'In 2020, Company X had 500 employees. How many employees did they have in 2022 if the number increased by 20% each year?',
    options: ['600', '720', '864', '960'],
    correctAnswer: '720',
  },
  {
    question: 'In 2019, Company Y produced 1,000 units of Product A. If production increased by 10% in 2020 and 15% in 2021, how many units were produced in 2021?',
    options: ['1,210', '1,265', '1,320', '1,265'],
    correctAnswer: '1,265',
  },
  {
    question: 'If Company Z’s sales were $200,000 in 2018, and it increased by 25% in 2019, then decreased by 10% in 2020, what were the sales in 2020?',
    options: ['$225,000', '$240,000', '$247,500', '$202,500'],
    correctAnswer: '$202,500',
  },
  {
    question: 'A school had 400 students in 2018. The number of students increased by 15% in 2019 and by 10% in 2020. How many students were enrolled in 2020?',
    options: ['460', '506', '517', '528'],
    correctAnswer: '506',
  },
  {
    question: 'In 2020, a company had $50,000 in revenue. The revenue increased by 10% in 2021 and by 5% in 2022. What was the revenue in 2022?',
    options: ['$52,500', '$55,500', '$57,750', '$60,000'],
    correctAnswer: '$57,750',
  },
  {
    question: 'A shop sold 800 units of a product in 2018. Sales decreased by 5% in 2019 but increased by 10% in 2020. How many units were sold in 2020?',
    options: ['792', '810', '874', '880'],
    correctAnswer: '874',
  },
  {
    question: 'The population of a town was 50,000 in 2017. It increased by 8% in 2018 and by 10% in 2019. What was the population at the end of 2019?',
    options: ['54,000', '55,400', '59,400', '60,500'],
    correctAnswer: '59,400',
  },
  {
    question: 'In 2018, a factory produced 1,200 machines. If production decreased by 10% in 2019 and increased by 20% in 2020, how many machines were produced in 2020?',
    options: ['1,152', '1,248', '1,320', '1,440'],
    correctAnswer: '1,320',
  },
  {
    question: 'A company’s sales were $600,000 in 2019. In 2020, sales dropped by 15%, but they increased by 20% in 2021. What were the sales in 2021?',
    options: ['$570,000', '$612,000', '$630,000', '$648,000'],
    correctAnswer: '$612,000',
  },
  {
    question: 'A university had 5,000 students in 2017. Enrollment increased by 12% in 2018 and 8% in 2019. How many students were there at the end of 2019?',
    options: ['5,300', '5,760', '5,870', '6,048'],
    correctAnswer: '6,048',
  },
  {
    question: 'In 2015, Company A had 2,000 employees. If the number of employees increased by 5% each year, how many employees did they have by the end of 2017?',
    options: ['2,100', '2,205', '2,310', '2,420'],
    correctAnswer: '2,205',
  },
  {
    question: 'A factory produced 4,000 units in 2019. In 2020, production increased by 12%, and in 2021, it increased by 15%. How many units were produced in 2021?',
    options: ['4,480', '4,600', '5,152', '5,300'],
    correctAnswer: '5,152',
  },
  {
    question: 'The population of City X was 1,500,000 in 2018. The population grew by 3% in 2019 and by 4% in 2020. What was the population at the end of 2020?',
    options: ['1,530,000', '1,591,800', '1,603,500', '1,620,000'],
    correctAnswer: '1,591,800',
  },
  {
    question: 'A store’s revenue was $100,000 in 2018, $120,000 in 2019, and $144,000 in 2020. What was the average percentage increase per year?',
    options: ['10%', '15%', '20%', '25%'],
    correctAnswer: '20%',
  },
  {
    question: 'In 2016, a company produced 500 cars. Production increased by 15% in 2017 and by another 10% in 2018. How many cars were produced in 2018?',
    options: ['550', '575', '632.5', '632'],
    correctAnswer: '632.5',
  },
  {
    question: 'A school had 1,000 students in 2019. Enrollment increased by 5% in 2020 and 8% in 2021. How many students were there by the end of 2021?',
    options: ['1,113', '1,140', '1,155', '1,170'],
    correctAnswer: '1,140',
  },
  {
    question: 'In 2018, a company’s profits were $500,000. Profits increased by 12% in 2019 and by 8% in 2020. What were the total profits at the end of 2020?',
    options: ['$546,000', '$572,000', '$605,760', '$627,200'],
    correctAnswer: '$605,760',
  },
  {
    question: 'A car dealership sold 800 cars in 2019. Sales increased by 10% in 2020 and by 5% in 2021. How many cars were sold in 2021?',
    options: ['900', '924', '945', '960'],
    correctAnswer: '924',
  },
  {
    question: 'In 2017, a company had revenue of $750,000. The revenue increased by 8% in 2018 and by 10% in 2019. What was the revenue at the end of 2019?',
    options: ['$810,000', '$850,000', '$891,000', '$907,500'],
    correctAnswer: '$891,000',
  },
  {
    question: 'The population of a town was 800,000 in 2018. It increased by 6% in 2019 and by 5% in 2020. What was the population at the end of 2020?',
    options: ['880,000', '885,600', '892,000', '897,600'],
    correctAnswer: '897,600',
  },
],

        'Bar Charts': [
  {
    question: 'What was the total sales figure in 2021 according to the bar chart?',
    options: ['50K', '75K', '100K', '125K'],
    correctAnswer: '100K',
  },
  {
    question: 'According to the chart, which product had the highest sales in 2019?',
    options: ['Product A', 'Product B', 'Product C', 'Product D'],
    correctAnswer: 'Product C',
  },
  {
    question: 'What is the percentage increase in revenue from 2018 to 2020 as shown in the bar chart?',
    options: ['25%', '30%', '35%', '40%'],
    correctAnswer: '35%',
  },
  {
    question: 'In which year did the company’s revenue exceed 10 million dollars for the first time, based on the bar chart?',
    options: ['2016', '2017', '2018', '2019'],
    correctAnswer: '2018',
  },
  {
    question: 'Which department had the lowest expenses in 2020, according to the chart?',
    options: ['HR', 'Marketing', 'Sales', 'IT'],
    correctAnswer: 'HR',
  },
  {
    question: 'By how much did sales increase from 2017 to 2020, based on the bar chart?',
    options: ['20%', '30%', '40%', '50%'],
    correctAnswer: '30%',
  },
  {
    question: 'According to the bar chart, what was the profit margin in 2019?',
    options: ['15%', '20%', '25%', '30%'],
    correctAnswer: '20%',
  },
  {
    question: 'In which quarter of 2020 was the revenue the highest, as per the bar chart?',
    options: ['Q1', 'Q2', 'Q3', 'Q4'],
    correctAnswer: 'Q4',
  },
  {
    question: 'What is the difference in total expenses between 2019 and 2020 as shown in the chart?',
    options: ['$50K', '$75K', '$100K', '$150K'],
    correctAnswer: '$100K',
  },
  {
    question: 'Which product category saw the largest growth from 2019 to 2021, based on the bar chart?',
    options: ['Electronics', 'Clothing', 'Furniture', 'Grocery'],
    correctAnswer: 'Electronics',
  },
  {
    question: 'What was the total profit in 2020 according to the bar chart?',
    options: ['$500K', '$600K', '$700K', '$800K'],
    correctAnswer: '$700K',
  },
  {
    question: 'In which year did the marketing expenses peak, according to the bar chart?',
    options: ['2017', '2018', '2019', '2020'],
    correctAnswer: '2019',
  },
  {
    question: 'According to the chart, which quarter had the lowest revenue in 2020?',
    options: ['Q1', 'Q2', 'Q3', 'Q4'],
    correctAnswer: 'Q2',
  },
  {
    question: 'What is the total number of units sold in 2021 based on the bar chart?',
    options: ['5,000', '7,500', '10,000', '12,500'],
    correctAnswer: '10,000',
  },
  {
    question: 'In which year did the company’s profit drop the most, according to the chart?',
    options: ['2016', '2017', '2018', '2019'],
    correctAnswer: '2017',
  },
  {
    question: 'Based on the chart, what was the revenue from Product B in 2021?',
    options: ['200K', '300K', '400K', '500K'],
    correctAnswer: '400K',
  },
  {
    question: 'Which region contributed the most to total sales in 2020 as shown in the bar chart?',
    options: ['North', 'South', 'East', 'West'],
    correctAnswer: 'North',
  },
  {
    question: 'According to the chart, how much did the IT department’s expenses increase from 2019 to 2020?',
    options: ['$20K', '$30K', '$40K', '$50K'],
    correctAnswer: '$30K',
  },
  {
    question: 'What was the total number of customers in 2019 according to the bar chart?',
    options: ['500', '600', '700', '800'],
    correctAnswer: '700',
  },
  {
    question: 'In which year did the cost of goods sold (COGS) exceed $1M, according to the bar chart?',
    options: ['2017', '2018', '2019', '2020'],
    correctAnswer: '2019',
  },
],

        'Pie Charts': [
  {
    question: 'In a pie chart showing the distribution of a company’s expenses, marketing accounts for 25%. What fraction of the total expenses is spent on marketing?',
    options: ['1/4', '1/3', '1/5', '1/2'],
    correctAnswer: '1/4',
  },
  {
    question: 'If 40% of a pie chart represents sales in Region A, and the total sales are 1,000 units, how many units were sold in Region A?',
    options: ['400', '500', '600', '700'],
    correctAnswer: '400',
  },
  {
    question: 'A pie chart shows the distribution of hours in a day. If the “work” sector covers 30%, how many hours are spent on work?',
    options: ['6 hours', '7 hours', '8 hours', '9 hours'],
    correctAnswer: '7 hours',
  },
  {
    question: 'In a pie chart representing departmental budgets, the IT department takes up 20%. If the total budget is $500,000, how much is allocated to the IT department?',
    options: ['$100,000', '$120,000', '$80,000', '$60,000'],
    correctAnswer: '$100,000',
  },
  {
    question: 'According to a pie chart, 15% of a company’s total revenue comes from Product A. If the total revenue is $1,000,000, how much revenue is generated from Product A?',
    options: ['$100,000', '$150,000', '$200,000', '$250,000'],
    correctAnswer: '$150,000',
  },
  {
    question: 'In a pie chart showing sources of energy, solar energy makes up 45°. What percentage of the pie chart is this?',
    options: ['10%', '12.5%', '15%', '25%'],
    correctAnswer: '12.5%',
  },
  {
    question: 'In a pie chart, the education sector represents 72°. What percentage of the total budget is allocated to education?',
    options: ['10%', '15%', '20%', '25%'],
    correctAnswer: '20%',
  },
  {
    question: 'If a pie chart shows that 60% of a budget is allocated to salaries and the total budget is $1,000,000, how much is allocated to salaries?',
    options: ['$500,000', '$600,000', '$700,000', '$800,000'],
    correctAnswer: '$600,000',
  },
  {
    question: 'A pie chart shows the distribution of expenses in different departments. If the HR department occupies 90° of the pie chart, what fraction of the total expenses does HR represent?',
    options: ['1/2', '1/3', '1/4', '1/5'],
    correctAnswer: '1/4',
  },
  {
    question: 'If the "transportation" category occupies 72° in a pie chart, what is the percentage of the total represented by transportation?',
    options: ['10%', '15%', '20%', '30%'],
    correctAnswer: '20%',
  },
  {
    question: 'A pie chart shows the percentage distribution of a company’s revenue. If the “product sales” section is 270°, what fraction of the total revenue comes from product sales?',
    options: ['1/4', '1/2', '3/4', '5/6'],
    correctAnswer: '3/4',
  },
  {
    question: 'In a pie chart showing time allocation, “leisure” takes up 90°. What percentage of time is spent on leisure?',
    options: ['20%', '25%', '30%', '50%'],
    correctAnswer: '25%',
  },
  {
    question: 'In a pie chart showing company expenses, the section for “research” is 108°. What percentage of the total expenses does research represent?',
    options: ['15%', '25%', '30%', '50%'],
    correctAnswer: '30%',
  },
  {
    question: 'According to a pie chart, 60% of an organization’s employees are male. If there are 2,000 employees in total, how many are male?',
    options: ['800', '1,000', '1,200', '1,500'],
    correctAnswer: '1,200',
  },
  {
    question: 'In a pie chart, the education sector takes up 72°. What fraction of the total pie chart does this represent?',
    options: ['1/4', '1/5', '1/3', '1/2'],
    correctAnswer: '1/5',
  },
  {
    question: 'If the "transport" section of a pie chart is 18°, what percentage of the total does this represent?',
    options: ['5%', '10%', '15%', '20%'],
    correctAnswer: '5%',
  },
  {
    question: 'In a pie chart representing departmental expenses, the sales department occupies 45°. What fraction of the total expenses does this represent?',
    options: ['1/6', '1/8', '1/9', '1/12'],
    correctAnswer: '1/8',
  },
  {
    question: 'According to a pie chart, 35% of an organization’s budget is allocated to infrastructure. If the total budget is $400,000, how much is allocated to infrastructure?',
    options: ['$120,000', '$140,000', '$160,000', '$180,000'],
    correctAnswer: '$140,000',
  },
  {
    question: 'In a pie chart representing the percentage of time spent on tasks, “meetings” occupies 90°. What percentage of time is spent in meetings?',
    options: ['20%', '25%', '30%', '35%'],
    correctAnswer: '25%',
  },
  {
    question: 'In a pie chart showing market shares, the electronics sector covers 144°. What percentage of the market does the electronics sector represent?',
    options: ['30%', '35%', '40%', '45%'],
    correctAnswer: '40%',
  },
],

        'Line Charts': [
  {
    question: 'What was the percentage increase in revenue from 2018 to 2019?',
    options: ['5%', '10%', '15%', '20%'],
    correctAnswer: '15%',
  },
  {
    question: 'According to the line chart, what was the total production in 2021?',
    options: ['1000 units', '1500 units', '2000 units', '2500 units'],
    correctAnswer: '2000 units',
  },
  {
    question: 'Between which two years did the company experience the highest growth in profits?',
    options: ['2017-2018', '2018-2019', '2019-2020', '2020-2021'],
    correctAnswer: '2019-2020',
  },
  {
    question: 'If the trend continues, what is the expected revenue for 2023 based on the line chart?',
    options: ['$500K', '$600K', '$700K', '$800K'],
    correctAnswer: '$700K',
  },
  {
    question: 'What was the decrease in the number of employees from 2019 to 2020?',
    options: ['50', '100', '150', '200'],
    correctAnswer: '100',
  },
  {
    question: 'What is the average yearly growth rate between 2016 and 2021 according to the line chart?',
    options: ['5%', '8%', '10%', '12%'],
    correctAnswer: '8%',
  },
  {
    question: 'In which year did the company have the lowest expenses?',
    options: ['2015', '2016', '2017', '2018'],
    correctAnswer: '2017',
  },
  {
    question: 'What was the change in sales between 2019 and 2020 according to the line chart?',
    options: ['Increased by 200 units', 'Decreased by 100 units', 'Increased by 300 units', 'No change'],
    correctAnswer: 'Increased by 200 units',
  },
  {
    question: 'What was the sales figure for 2020 as shown in the line chart?',
    options: ['1000 units', '1200 units', '1400 units', '1600 units'],
    correctAnswer: '1200 units',
  },
  {
    question: 'Between which two years did the stock price show a downward trend?',
    options: ['2017-2018', '2018-2019', '2019-2020', '2020-2021'],
    correctAnswer: '2018-2019',
  },
  {
    question: 'How much did the company’s profit increase from 2020 to 2021?',
    options: ['10%', '15%', '20%', '25%'],
    correctAnswer: '20%',
  },
  {
    question: 'What was the company’s revenue in 2018 according to the line chart?',
    options: ['$400K', '$500K', '$600K', '$700K'],
    correctAnswer: '$600K',
  },
  {
    question: 'Based on the line chart, what was the trend in product sales between 2016 and 2020?',
    options: ['Steady increase', 'Fluctuating growth', 'Sharp decline', 'Constant sales'],
    correctAnswer: 'Fluctuating growth',
  },
  {
    question: 'In which year did the line chart show the highest sales growth?',
    options: ['2016', '2018', '2019', '2020'],
    correctAnswer: '2019',
  },
  {
    question: 'If the sales trend continues, what would be the projected sales for 2022?',
    options: ['1100 units', '1200 units', '1300 units', '1400 units'],
    correctAnswer: '1300 units',
  },
  {
    question: 'What was the drop in revenue between 2017 and 2018 as shown in the line chart?',
    options: ['$50K', '$100K', '$150K', '$200K'],
    correctAnswer: '$100K',
  },
  {
    question: 'According to the line chart, which year had the highest overall expenses?',
    options: ['2018', '2019', '2020', '2021'],
    correctAnswer: '2020',
  },
  {
    question: 'What was the increase in production costs from 2016 to 2018?',
    options: ['$50K', '$75K', '$100K', '$150K'],
    correctAnswer: '$100K',
  },
  {
    question: 'What is the percentage growth in the number of employees from 2017 to 2019?',
    options: ['10%', '20%', '30%', '40%'],
    correctAnswer: '30%',
  },
  {
    question: 'According to the line chart, by how much did the company’s stock price increase between 2019 and 2020?',
    options: ['20%', '25%', '30%', '35%'],
    correctAnswer: '25%',
  },
],

      },
    },
    {
      name: 'Verbal Ability',
      description: 'Data and graph-based problem-solving.',
      folders: {
        'Spotting Errors': [
    {
        question: 'Identify the part of the sentence that contains an error: "Neither the students nor the teacher are ready for the exam."',
        options: ['Neither the students', 'nor the teacher', 'are ready', 'No error'],
        correctAnswer: 'are ready',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "Each of the boys play football very well."',
        options: ['Each of the boys', 'play football', 'very well', 'No error'],
        correctAnswer: 'play football',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "He has went to the market to buy vegetables."',
        options: ['He has went', 'to the market', 'to buy vegetables', 'No error'],
        correctAnswer: 'He has went',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "She sings as well as him."',
        options: ['She sings', 'as well', 'as him', 'No error'],
        correctAnswer: 'as him',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "The sceneries in Kashmir is breathtaking."',
        options: ['The sceneries', 'in Kashmir', 'is breathtaking', 'No error'],
        correctAnswer: 'The sceneries',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "He is good in playing football."',
        options: ['He is good', 'in playing football', 'very much', 'No error'],
        correctAnswer: 'in playing football',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "One of my friend is going to the party."',
        options: ['One of my friend', 'is going', 'to the party', 'No error'],
        correctAnswer: 'One of my friend',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "She did not knew the answer to the question."',
        options: ['She did not', 'knew the answer', 'to the question', 'No error'],
        correctAnswer: 'knew the answer',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "The price of these books have increased."',
        options: ['The price of', 'these books', 'have increased', 'No error'],
        correctAnswer: 'have increased',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "I prefer tea than coffee."',
        options: ['I prefer', 'tea', 'than coffee', 'No error'],
        correctAnswer: 'than coffee',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "He is senior than me by five years."',
        options: ['He is senior', 'than me', 'by five years', 'No error'],
        correctAnswer: 'than me',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "She is going to the market for buy some fruits."',
        options: ['She is going', 'to the market', 'for buy', 'No error'],
        correctAnswer: 'for buy',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "The team has won every match, isn’t it?"',
        options: ['The team has', 'won every match', 'isn’t it', 'No error'],
        correctAnswer: 'isn’t it',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "Many a man were present at the meeting."',
        options: ['Many a man', 'were present', 'at the meeting', 'No error'],
        correctAnswer: 'were present',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "He succeeded because he worked hard, did he?"',
        options: ['He succeeded', 'because he worked hard', 'did he', 'No error'],
        correctAnswer: 'did he',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "He has been working here since five years."',
        options: ['He has been working', 'here since', 'five years', 'No error'],
        correctAnswer: 'five years',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "Neither John nor his friends was there."',
        options: ['Neither John', 'nor his friends', 'was there', 'No error'],
        correctAnswer: 'was there',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "No sooner he reached the station than the train left."',
        options: ['No sooner', 'he reached the station', 'than the train left', 'No error'],
        correctAnswer: 'he reached the station',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "He is the best student of the two."',
        options: ['He is the best', 'student of', 'the two', 'No error'],
        correctAnswer: 'the two',
    },
    {
        question: 'Identify the part of the sentence that contains an error: "They discussed about the new policy in the meeting."',
        options: ['They discussed', 'about the new policy', 'in the meeting', 'No error'],
        correctAnswer: 'about the new policy',
    },
],

        'Synonyms': [
    {
        question: 'Select the synonym of the word "Abundant":',
        options: ['Scarce', 'Plentiful', 'Meager', 'Few'],
        correctAnswer: 'Plentiful',
    },
    {
        question: 'Select the synonym of the word "Candid":',
        options: ['Secretive', 'Deceitful', 'Honest', 'Reserved'],
        correctAnswer: 'Honest',
    },
    {
        question: 'Select the synonym of the word "Compassion":',
        options: ['Cruelty', 'Pity', 'Hatred', 'Indifference'],
        correctAnswer: 'Pity',
    },
    {
        question: 'Select the synonym of the word "Exquisite":',
        options: ['Ordinary', 'Beautiful', 'Rough', 'Ugly'],
        correctAnswer: 'Beautiful',
    },
    {
        question: 'Select the synonym of the word "Fortify":',
        options: ['Weaken', 'Destroy', 'Strengthen', 'Collapse'],
        correctAnswer: 'Strengthen',
    },
    {
        question: 'Select the synonym of the word "Imminent":',
        options: ['Distant', 'Immediate', 'Unlikely', 'Avoidable'],
        correctAnswer: 'Immediate',
    },
    {
        question: 'Select the synonym of the word "Incredible":',
        options: ['Ordinary', 'Unbelievable', 'Mediocre', 'Doubtful'],
        correctAnswer: 'Unbelievable',
    },
    {
        question: 'Select the synonym of the word "Meticulous":',
        options: ['Careless', 'Precise', 'Lazy', 'Negligent'],
        correctAnswer: 'Precise',
    },
    {
        question: 'Select the synonym of the word "Obsolete":',
        options: ['Modern', 'Outdated', 'Relevant', 'Timely'],
        correctAnswer: 'Outdated',
    },
    {
        question: 'Select the synonym of the word "Persevere":',
        options: ['Give up', 'Persist', 'Quit', 'Surrender'],
        correctAnswer: 'Persist',
    },
    {
        question: 'Select the synonym of the word "Reverence":',
        options: ['Disrespect', 'Honor', 'Contempt', 'Mockery'],
        correctAnswer: 'Honor',
    },
    {
        question: 'Select the synonym of the word "Tranquil":',
        options: ['Noisy', 'Peaceful', 'Chaotic', 'Disturbed'],
        correctAnswer: 'Peaceful',
    },
    {
        question: 'Select the synonym of the word "Vague":',
        options: ['Clear', 'Obvious', 'Unclear', 'Definite'],
        correctAnswer: 'Unclear',
    },
    {
        question: 'Select the synonym of the word "Vital":',
        options: ['Unnecessary', 'Crucial', 'Optional', 'Secondary'],
        correctAnswer: 'Crucial',
    },
    {
        question: 'Select the synonym of the word "Adverse":',
        options: ['Favorable', 'Harmful', 'Beneficial', 'Agreeable'],
        correctAnswer: 'Harmful',
    },
    {
        question: 'Select the synonym of the word "Brilliant":',
        options: ['Dull', 'Intelligent', 'Stupid', 'Slow'],
        correctAnswer: 'Intelligent',
    },
    {
        question: 'Select the synonym of the word "Diligent":',
        options: ['Lazy', 'Hardworking', 'Careless', 'Negligent'],
        correctAnswer: 'Hardworking',
    },
    {
        question: 'Select the synonym of the word "Eloquent":',
        options: ['Inarticulate', 'Fluent', 'Clumsy', 'Confusing'],
        correctAnswer: 'Fluent',
    },
    {
        question: 'Select the synonym of the word "Generous":',
        options: ['Selfish', 'Kind', 'Greedy', 'Mean'],
        correctAnswer: 'Kind',
    },
    {
        question: 'Select the synonym of the word "Hostile":',
        options: ['Friendly', 'Aggressive', 'Kind', 'Peaceful'],
        correctAnswer: 'Aggressive',
    },
],

        'Antonyms': [
    {
        question: 'Select the antonym of the word "Abundant":',
        options: ['Plentiful', 'Scarce', 'Sufficient', 'Ample'],
        correctAnswer: 'Scarce',
    },
    {
        question: 'Select the antonym of the word "Candid":',
        options: ['Honest', 'Open', 'Deceitful', 'Frank'],
        correctAnswer: 'Deceitful',
    },
    {
        question: 'Select the antonym of the word "Compassion":',
        options: ['Cruelty', 'Kindness', 'Pity', 'Sympathy'],
        correctAnswer: 'Cruelty',
    },
    {
        question: 'Select the antonym of the word "Exquisite":',
        options: ['Beautiful', 'Ugly', 'Delicate', 'Elegant'],
        correctAnswer: 'Ugly',
    },
    {
        question: 'Select the antonym of the word "Fortify":',
        options: ['Strengthen', 'Weaken', 'Support', 'Bolster'],
        correctAnswer: 'Weaken',
    },
    {
        question: 'Select the antonym of the word "Imminent":',
        options: ['Immediate', 'Distant', 'Near', 'Impending'],
        correctAnswer: 'Distant',
    },
    {
        question: 'Select the antonym of the word "Incredible":',
        options: ['Amazing', 'Ordinary', 'Unbelievable', 'Remarkable'],
        correctAnswer: 'Ordinary',
    },
    {
        question: 'Select the antonym of the word "Meticulous":',
        options: ['Careless', 'Precise', 'Accurate', 'Conscientious'],
        correctAnswer: 'Careless',
    },
    {
        question: 'Select the antonym of the word "Obsolete":',
        options: ['Modern', 'Outdated', 'Old', 'Archaic'],
        correctAnswer: 'Modern',
    },
    {
        question: 'Select the antonym of the word "Persevere":',
        options: ['Persist', 'Quit', 'Endure', 'Proceed'],
        correctAnswer: 'Quit',
    },
    {
        question: 'Select the antonym of the word "Reverence":',
        options: ['Honor', 'Disrespect', 'Respect', 'Veneration'],
        correctAnswer: 'Disrespect',
    },
    {
        question: 'Select the antonym of the word "Tranquil":',
        options: ['Peaceful', 'Chaotic', 'Calm', 'Serene'],
        correctAnswer: 'Chaotic',
    },
    {
        question: 'Select the antonym of the word "Vague":',
        options: ['Unclear', 'Clear', 'Ambiguous', 'Indistinct'],
        correctAnswer: 'Clear',
    },
    {
        question: 'Select the antonym of the word "Vital":',
        options: ['Crucial', 'Unnecessary', 'Important', 'Essential'],
        correctAnswer: 'Unnecessary',
    },
    {
        question: 'Select the antonym of the word "Adverse":',
        options: ['Favorable', 'Harmful', 'Negative', 'Destructive'],
        correctAnswer: 'Favorable',
    },
    {
        question: 'Select the antonym of the word "Brilliant":',
        options: ['Dull', 'Intelligent', 'Bright', 'Sparkling'],
        correctAnswer: 'Dull',
    },
    {
        question: 'Select the antonym of the word "Diligent":',
        options: ['Hardworking', 'Lazy', 'Active', 'Industrious'],
        correctAnswer: 'Lazy',
    },
    {
        question: 'Select the antonym of the word "Eloquent":',
        options: ['Fluent', 'Inarticulate', 'Persuasive', 'Expressive'],
        correctAnswer: 'Inarticulate',
    },
    {
        question: 'Select the antonym of the word "Generous":',
        options: ['Selfish', 'Kind', 'Benevolent', 'Charitable'],
        correctAnswer: 'Selfish',
    },
    {
        question: 'Select the antonym of the word "Hostile":',
        options: ['Friendly', 'Aggressive', 'Unfriendly', 'Belligerent'],
        correctAnswer: 'Friendly',
    },
],

        'Selecting Words': [
    {
        question: 'He was very tired, but he ______ completed the task.',
        options: ['nevertheless', 'hence', 'since', 'because'],
        correctAnswer: 'nevertheless',
    },
    {
        question: 'She didn’t pass the test ______ she studied hard.',
        options: ['although', 'because', 'therefore', 'so'],
        correctAnswer: 'although',
    },
    {
        question: 'We must ______ the rules of the school.',
        options: ['abide by', 'abide', 'adhere', 'obey by'],
        correctAnswer: 'abide by',
    },
    {
        question: 'They were waiting for the bus ______ the rain.',
        options: ['despite', 'because', 'due to', 'in case'],
        correctAnswer: 'despite',
    },
    {
        question: 'He will succeed ______ his determination.',
        options: ['due to', 'because', 'in spite of', 'instead of'],
        correctAnswer: 'due to',
    },
    {
        question: 'The committee discussed the issue ______ length.',
        options: ['in', 'at', 'on', 'to'],
        correctAnswer: 'at',
    },
    {
        question: 'The train was delayed ______ the heavy fog.',
        options: ['because', 'because of', 'due', 'resulting'],
        correctAnswer: 'because of',
    },
    {
        question: 'He ran fast ______ he could catch the bus.',
        options: ['so that', 'in case', 'even though', 'because'],
        correctAnswer: 'so that',
    },
    {
        question: 'Please speak ______ so that everyone can hear you.',
        options: ['loud', 'loudly', 'louder', 'loudness'],
        correctAnswer: 'loudly',
    },
    {
        question: 'I am looking forward ______ my vacation next month.',
        options: ['for', 'to', 'in', 'on'],
        correctAnswer: 'to',
    },
    {
        question: 'We will start the meeting ______ everyone arrives.',
        options: ['after', 'as soon as', 'until', 'unless'],
        correctAnswer: 'as soon as',
    },
    {
        question: 'She worked hard ______ she could win the competition.',
        options: ['so that', 'in order to', 'although', 'since'],
        correctAnswer: 'so that',
    },
    {
        question: 'He didn’t go to the party ______ he was tired.',
        options: ['because', 'although', 'but', 'despite'],
        correctAnswer: 'because',
    },
    {
        question: 'We need to finish this project ______ Friday.',
        options: ['by', 'until', 'on', 'at'],
        correctAnswer: 'by',
    },
    {
        question: 'She has been working here ______ 2015.',
        options: ['since', 'for', 'from', 'by'],
        correctAnswer: 'since',
    },
    {
        question: 'They couldn’t attend the meeting ______ the short notice.',
        options: ['because', 'due to', 'as', 'since'],
        correctAnswer: 'due to',
    },
    {
        question: 'He managed to finish the race ______ being injured.',
        options: ['despite', 'although', 'because', 'due to'],
        correctAnswer: 'despite',
    },
    {
        question: 'The new policy was introduced ______ improve efficiency.',
        options: ['to', 'for', 'so that', 'so as'],
        correctAnswer: 'to',
    },
    {
        question: 'I prefer coffee ______ tea.',
        options: ['than', 'to', 'as', 'over'],
        correctAnswer: 'to',
    },
    {
        question: 'He can’t afford a new car ______ his low salary.',
        options: ['because', 'due to', 'despite', 'since'],
        correctAnswer: 'due to',
    },
],

        'Spellings': [
    {
        question: 'Choose the correctly spelled word:',
        options: ['accomodate', 'accommodate', 'acommodate', 'accomadate'],
        correctAnswer: 'accommodate',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['definately', 'definitely', 'definatelye', 'definitley'],
        correctAnswer: 'definitely',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['occurence', 'occurrence', 'occurencee', 'occurance'],
        correctAnswer: 'occurrence',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['independant', 'independent', 'independantt', 'indepent'],
        correctAnswer: 'independent',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['seperate', 'separate', 'seperete', 'seperat'],
        correctAnswer: 'separate',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['appologies', 'apologies', 'apologize', 'apologise'],
        correctAnswer: 'apologies',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['existance', 'existence', 'existense', 'existant'],
        correctAnswer: 'existence',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['maintainance', 'maintenance', 'maintainence', 'maintenence'],
        correctAnswer: 'maintenance',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['definintely', 'definitely', 'definately', 'definitly'],
        correctAnswer: 'definitely',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['happening', 'hapening', 'happaning', 'happend'],
        correctAnswer: 'happening',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['calendar', 'calender', 'calandar', 'calandar'],
        correctAnswer: 'calendar',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['beautiful', 'beutiful', 'beutifull', 'beutiful'],
        correctAnswer: 'beautiful',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['achieve', 'acheive', 'achive', 'acheeve'],
        correctAnswer: 'achieve',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['desperate', 'desparate', 'desparat', 'desperrate'],
        correctAnswer: 'desperate',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['extraordinary', 'extraordinarry', 'extraordanary', 'extraordinaryy'],
        correctAnswer: 'extraordinary',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['forbidden', 'forbiden', 'forbidin', 'forbiddon'],
        correctAnswer: 'forbidden',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['government', 'goverment', 'governement', 'govenrment'],
        correctAnswer: 'government',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['knowledge', 'knowladge', 'knwoledge', 'knwledge'],
        correctAnswer: 'knowledge',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['privilege', 'priviledge', 'privilage', 'privilegee'],
        correctAnswer: 'privilege',
    },
    {
        question: 'Choose the correctly spelled word:',
        options: ['occur', 'ocur', 'ocurr', 'ocur'],
        correctAnswer: 'occur',
    },
],

        'Sentence Formation': [
    {
        question: 'Arrange the words to form a correct sentence: "play / children / the / in / park / are / the".',
        options: [
            'The children play in the park.',
            'The park are play in children.',
            'In the park play children the.',
            'Children are play the in park.'
        ],
        correctAnswer: 'The children play in the park.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "coffee / would / like / I / a / cup".',
        options: [
            'I a cup would like coffee.',
            'Would I like a cup coffee.',
            'I would like a cup of coffee.',
            'A cup of coffee would I like.'
        ],
        correctAnswer: 'I would like a cup of coffee.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "the / cat / on / the / mat / is".',
        options: [
            'The cat is on the mat.',
            'On the mat the cat is.',
            'Is the cat on mat the.',
            'The is cat on the mat.'
        ],
        correctAnswer: 'The cat is on the mat.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "school / to / I / every / go / day".',
        options: [
            'I go school to every day.',
            'I go to school every day.',
            'Every day I go to school.',
            'To school go I every day.'
        ],
        correctAnswer: 'I go to school every day.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "like / to / dogs / I / play".',
        options: [
            'I like play to dogs.',
            'To play dogs I like.',
            'I like to play with dogs.',
            'Play with dogs I like to.'
        ],
        correctAnswer: 'I like to play with dogs.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "is / very / she / beautiful".',
        options: [
            'She very is beautiful.',
            'Beautiful is she very.',
            'She is very beautiful.',
            'Very she is beautiful.'
        ],
        correctAnswer: 'She is very beautiful.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "want / to / I / go / home".',
        options: [
            'Home want I go to.',
            'I want to go home.',
            'To go home I want.',
            'I go want to home.'
        ],
        correctAnswer: 'I want to go home.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "favorite / my / is / chocolate".',
        options: [
            'Is my favorite chocolate.',
            'My favorite is chocolate.',
            'Chocolate is my favorite.',
            'Favorite chocolate my is.'
        ],
        correctAnswer: 'My favorite is chocolate.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "reading / enjoy / I / books".',
        options: [
            'Books I enjoy reading.',
            'I enjoy reading books.',
            'Enjoy reading I books.',
            'Reading books enjoy I.'
        ],
        correctAnswer: 'I enjoy reading books.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "often / goes / he / gym / the / to".',
        options: [
            'He goes to the gym often.',
            'To the gym goes he often.',
            'He often to the gym goes.',
            'Goes he often to the gym.'
        ],
        correctAnswer: 'He goes to the gym often.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "the / sun / shines / brightly".',
        options: [
            'Shines the sun brightly.',
            'The sun brightly shines.',
            'Brightly the sun shines.',
            'The sun shines brightly.'
        ],
        correctAnswer: 'The sun shines brightly.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "family / my / every / dinner / has / Sunday".',
        options: [
            'My family has dinner every Sunday.',
            'Every Sunday my family has dinner.',
            'Has my family dinner every Sunday.',
            'Dinner every Sunday has my family.'
        ],
        correctAnswer: 'My family has dinner every Sunday.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "friends / I / with / my / enjoy".',
        options: [
            'I enjoy with my friends.',
            'I enjoy my friends with.',
            'Enjoy I with my friends.',
            'I enjoy my friends.'
        ],
        correctAnswer: 'I enjoy my friends.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "play / the / in / children / park / the".',
        options: [
            'Children play in the park.',
            'In the park children play the.',
            'Play in the park children.',
            'The children park play in.'
        ],
        correctAnswer: 'Children play in the park.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "study / for / I / my / exams".',
        options: [
            'For my exams I study.',
            'I study my exams for.',
            'My exams I study for.',
            'I for study my exams.'
        ],
        correctAnswer: 'I study for my exams.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "good / is / this / movie".',
        options: [
            'This is good movie.',
            'Is this good movie?',
            'This movie is good.',
            'Good movie this is.'
        ],
        correctAnswer: 'This movie is good.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "to / loves / travel / she".',
        options: [
            'She to travel loves.',
            'Loves she to travel.',
            'She loves to travel.',
            'Travel she loves to.'
        ],
        correctAnswer: 'She loves to travel.',
    },
    {
        question: 'Arrange the words to form a correct sentence: "school / I / love / my / going / to".',
        options: [
            'I love going to my school.',
            'Going to school I love my.',
            'My school I love going to.',
            'To my school going I love.'
        ],
        correctAnswer: 'I love going to my school.',
    },
],

        'Ordering of Words': [
    {
        question: 'Rearrange the words to form a correct sentence: "books / read / I / love".',
        options: [
            'I love read books.',
            'Love I books read.',
            'I love books read.',
            'I love to read books.'
        ],
        correctAnswer: 'I love to read books.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "the / park / children / are / playing / in".',
        options: [
            'In the park children are playing.',
            'Playing are children in the park.',
            'Children are playing in the park.',
            'The children park are playing in.'
        ],
        correctAnswer: 'Children are playing in the park.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "cake / delicious / is / this".',
        options: [
            'This is delicious cake.',
            'Cake is delicious this.',
            'This delicious cake is.',
            'Is this cake delicious.'
        ],
        correctAnswer: 'This is delicious cake.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "to / every / she / day / yoga / does".',
        options: [
            'She does yoga to every day.',
            'Every day she does yoga.',
            'Does she yoga to every day.',
            'She yoga does to every day.'
        ],
        correctAnswer: 'Every day she does yoga.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "friend / my / is / he".',
        options: [
            'He is my friend.',
            'My friend he is.',
            'He my friend is.',
            'Is he my friend.'
        ],
        correctAnswer: 'He is my friend.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "the / rain / loves / to / play / children".',
        options: [
            'Children loves to play the rain.',
            'To play the rain loves children.',
            'The rain loves children to play.',
            'Children love to play in the rain.'
        ],
        correctAnswer: 'Children love to play in the rain.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "home / I / going / am".',
        options: [
            'Am I going home.',
            'I am home going.',
            'I am going home.',
            'Going home I am.'
        ],
        correctAnswer: 'I am going home.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "swimming / loves / she".',
        options: [
            'She loves swimming.',
            'Loves she swimming.',
            'Swimming she loves.',
            'She swimming loves.'
        ],
        correctAnswer: 'She loves swimming.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "the / beautiful / is / flower".',
        options: [
            'Is the beautiful flower.',
            'The flower is beautiful.',
            'Beautiful is the flower.',
            'Flower is beautiful the.'
        ],
        correctAnswer: 'The flower is beautiful.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "the / played / children / outside".',
        options: [
            'Children played outside the.',
            'The children played outside.',
            'Outside played the children.',
            'Played outside the children.'
        ],
        correctAnswer: 'The children played outside.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "to / study / every / he / wants / day".',
        options: [
            'He wants study to every day.',
            'He wants to study every day.',
            'Every day he wants study to.',
            'Wants he study to every day.'
        ],
        correctAnswer: 'He wants to study every day.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "game / exciting / is / this".',
        options: [
            'This is exciting game.',
            'Is this exciting game.',
            'This game is exciting.',
            'Exciting this game is.'
        ],
        correctAnswer: 'This game is exciting.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "weekend / on / the / we / go / hiking".',
        options: [
            'We go hiking on the weekend.',
            'On the weekend we go hiking.',
            'Go we hiking on the weekend.',
            'Hiking we go on the weekend.'
        ],
        correctAnswer: 'We go hiking on the weekend.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "homework / my / is / done".',
        options: [
            'Is my homework done.',
            'My homework done is.',
            'Done is my homework.',
            'Homework is my done.'
        ],
        correctAnswer: 'Is my homework done.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "likes / he / movies / watching".',
        options: [
            'He watching likes movies.',
            'He likes movies watching.',
            'He likes watching movies.',
            'Watching movies he likes.'
        ],
        correctAnswer: 'He likes watching movies.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "singing / she / loves / in / the / shower".',
        options: [
            'Loves she singing in the shower.',
            'She loves singing in the shower.',
            'In the shower she loves singing.',
            'Singing she loves in the shower.'
        ],
        correctAnswer: 'She loves singing in the shower.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "friends / my / visit / I / often".',
        options: [
            'I visit my friends often.',
            'My friends I often visit.',
            'Often I visit my friends.',
            'I often friends visit my.'
        ],
        correctAnswer: 'I visit my friends often.',
    },
    {
        question: 'Rearrange the words to form a correct sentence: "chocolate / cake / delicious / is".',
        options: [
            'Is chocolate cake delicious.',
            'Chocolate cake is delicious.',
            'Delicious is chocolate cake.',
            'Cake chocolate is delicious.'
        ],
        correctAnswer: 'Chocolate cake is delicious.',
    },
],

        'Sentence Correction': [
    {
        question: 'She don’t like going to the movies.',
        options: [
            'She doesn’t like going to the movies.',
            'She do not like going to the movies.',
            'She don’t likes going to the movies.',
            'No correction needed.'
        ],
        correctAnswer: 'She doesn’t like going to the movies.',
    },
    {
        question: 'He run fast than anyone in his class.',
        options: [
            'He runs faster than anyone in his class.',
            'He running fast than anyone in his class.',
            'He run faster than anyone in his class.',
            'No correction needed.'
        ],
        correctAnswer: 'He runs faster than anyone in his class.',
    },
    {
        question: 'The books is on the table.',
        options: [
            'The book is on the table.',
            'The books are on the table.',
            'The book are on the table.',
            'No correction needed.'
        ],
        correctAnswer: 'The book is on the table.',
    },
    {
        question: 'She enjoys to read books.',
        options: [
            'She enjoys reading books.',
            'She enjoy to read books.',
            'She enjoys read books.',
            'No correction needed.'
        ],
        correctAnswer: 'She enjoys reading books.',
    },
    {
        question: 'I can’t hardly wait for the concert.',
        options: [
            'I can hardly wait for the concert.',
            'I can’t wait hardly for the concert.',
            'I can not hardly wait for the concert.',
            'No correction needed.'
        ],
        correctAnswer: 'I can hardly wait for the concert.',
    },
    {
        question: 'Everyone should bring their own lunch.',
        options: [
            'Everyone should bring his or her own lunch.',
            'Everyone should brings their own lunch.',
            'Everyone should bring it’s own lunch.',
            'No correction needed.'
        ],
        correctAnswer: 'Everyone should bring his or her own lunch.',
    },
    {
        question: 'He has went to the store.',
        options: [
            'He has gone to the store.',
            'He has go to the store.',
            'He goes to the store.',
            'No correction needed.'
        ],
        correctAnswer: 'He has gone to the store.',
    },
    {
        question: 'There is many options to choose from.',
        options: [
            'There are many options to choose from.',
            'There is a many options to choose from.',
            'There is much options to choose from.',
            'No correction needed.'
        ],
        correctAnswer: 'There are many options to choose from.',
    },
    {
        question: 'He don’t have no idea.',
        options: [
            'He doesn’t have any idea.',
            'He do not have no idea.',
            'He don’t have any idea.',
            'No correction needed.'
        ],
        correctAnswer: 'He doesn’t have any idea.',
    },
    {
        question: 'Neither of the answers are correct.',
        options: [
            'Neither of the answers is correct.',
            'Neither of the answer are correct.',
            'Neither of answer is correct.',
            'No correction needed.'
        ],
        correctAnswer: 'Neither of the answers is correct.',
    },
    {
        question: 'She sings good.',
        options: [
            'She sings well.',
            'She sing good.',
            'She sing well.',
            'No correction needed.'
        ],
        correctAnswer: 'She sings well.',
    },
    {
        question: 'I look forward to see you.',
        options: [
            'I look forward to seeing you.',
            'I looks forward to see you.',
            'I look forwards to see you.',
            'No correction needed.'
        ],
        correctAnswer: 'I look forward to seeing you.',
    },
    {
        question: 'This is the bestest movie I have ever seen.',
        options: [
            'This is the best movie I have ever seen.',
            'This is the most best movie I have ever seen.',
            'This is best movie I have ever seen.',
            'No correction needed.'
        ],
        correctAnswer: 'This is the best movie I have ever seen.',
    },
    {
        question: 'He works hardly to earn a living.',
        options: [
            'He works hard to earn a living.',
            'He hardly works to earn a living.',
            'He works hardily to earn a living.',
            'No correction needed.'
        ],
        correctAnswer: 'He works hard to earn a living.',
    },
    {
        question: 'She is more smarter than her brother.',
        options: [
            'She is smarter than her brother.',
            'She is more smart than her brother.',
            'She is the smarter than her brother.',
            'No correction needed.'
        ],
        correctAnswer: 'She is smarter than her brother.',
    },
    {
        question: 'The team have won the match.',
        options: [
            'The team has won the match.',
            'The team won the match.',
            'The teams have won the match.',
            'No correction needed.'
        ],
        correctAnswer: 'The team has won the match.',
    },
    {
        question: 'I wish I was taller.',
        options: [
            'I wish I were taller.',
            'I wish I am taller.',
            'I wish I be taller.',
            'No correction needed.'
        ],
        correctAnswer: 'I wish I were taller.',
    },
    {
        question: 'She is good in mathematics.',
        options: [
            'She is good at mathematics.',
            'She is well in mathematics.',
            'She is good with mathematics.',
            'No correction needed.'
        ],
        correctAnswer: 'She is good at mathematics.',
    },
],
        'Sentence Improvement': [
    {
        question: 'He is a good player and play very well.',
        options: [
            'He is a good player and plays very well.',
            'He is a good player and played very well.',
            'He is good player and plays very well.',
            'No improvement needed.'
        ],
        correctAnswer: 'He is a good player and plays very well.',
    },
    {
        question: 'She runs more faster than her brother.',
        options: [
            'She runs faster than her brother.',
            'She run faster than her brother.',
            'She is running faster than her brother.',
            'No improvement needed.'
        ],
        correctAnswer: 'She runs faster than her brother.',
    },
    {
        question: 'The book is lying on the table.',
        options: [
            'The book lies on the table.',
            'The book is laying on the table.',
            'The book is lie on the table.',
            'No improvement needed.'
        ],
        correctAnswer: 'The book lies on the table.',
    },
    {
        question: 'He is the most tallest boy in the class.',
        options: [
            'He is the tallest boy in the class.',
            'He is the taller boy in the class.',
            'He is the most tall boy in the class.',
            'No improvement needed.'
        ],
        correctAnswer: 'He is the tallest boy in the class.',
    },
    {
        question: 'I can able to solve this problem.',
        options: [
            'I am able to solve this problem.',
            'I can solve this problem.',
            'I could able to solve this problem.',
            'No improvement needed.'
        ],
        correctAnswer: 'I am able to solve this problem.',
    },
    {
        question: 'They was playing football yesterday.',
        options: [
            'They were playing football yesterday.',
            'They was play football yesterday.',
            'They played football yesterday.',
            'No improvement needed.'
        ],
        correctAnswer: 'They were playing football yesterday.',
    },
    {
        question: 'I have seen her yesterday.',
        options: [
            'I saw her yesterday.',
            'I seen her yesterday.',
            'I have seen her on yesterday.',
            'No improvement needed.'
        ],
        correctAnswer: 'I saw her yesterday.',
    },
    {
        question: 'She is studying since morning.',
        options: [
            'She has been studying since morning.',
            'She is study since morning.',
            'She studies since morning.',
            'No improvement needed.'
        ],
        correctAnswer: 'She has been studying since morning.',
    },
    {
        question: 'He enjoys to play basketball.',
        options: [
            'He enjoys playing basketball.',
            'He enjoy to play basketball.',
            'He is enjoying to play basketball.',
            'No improvement needed.'
        ],
        correctAnswer: 'He enjoys playing basketball.',
    },
    {
        question: 'There is five apples in the basket.',
        options: [
            'There are five apples in the basket.',
            'There is a five apples in the basket.',
            'There is five apple in the basket.',
            'No improvement needed.'
        ],
        correctAnswer: 'There are five apples in the basket.',
    },
    {
        question: 'She do not like coffee.',
        options: [
            'She does not like coffee.',
            'She do likes coffee.',
            'She does like coffee.',
            'No improvement needed.'
        ],
        correctAnswer: 'She does not like coffee.',
    },
    {
        question: 'He does not have much friends.',
        options: [
            'He does not have many friends.',
            'He do not have much friends.',
            'He does not has many friends.',
            'No improvement needed.'
        ],
        correctAnswer: 'He does not have many friends.',
    },
    {
        question: 'The informations provided are useful.',
        options: [
            'The information provided is useful.',
            'The informations provided is useful.',
            'The information are provided useful.',
            'No improvement needed.'
        ],
        correctAnswer: 'The information provided is useful.',
    },
    {
        question: 'She told me that she will come.',
        options: [
            'She told me that she would come.',
            'She tells me that she will come.',
            'She told me that she comes.',
            'No improvement needed.'
        ],
        correctAnswer: 'She told me that she would come.',
    },
    {
        question: 'I wish I was there.',
        options: [
            'I wish I were there.',
            'I wish I am there.',
            'I wish I be there.',
            'No improvement needed.'
        ],
        correctAnswer: 'I wish I were there.',
    },
    {
        question: 'He is the best player of the team.',
        options: [
            'He is the best player on the team.',
            'He is the best player in the team.',
            'He is the bestest player of the team.',
            'No improvement needed.'
        ],
        correctAnswer: 'He is the best player on the team.',
    },
    {
        question: 'They discussed about the project yesterday.',
        options: [
            'They discussed the project yesterday.',
            'They discuss about the project yesterday.',
            'They discussed on the project yesterday.',
            'No improvement needed.'
        ],
        correctAnswer: 'They discussed the project yesterday.',
    },
    {
        question: 'This is a very good news.',
        options: [
            'This is very good news.',
            'This is a very good piece of news.',
            'This is a very good new.',
            'No improvement needed.'
        ],
        correctAnswer: 'This is very good news.',
    },
],

        'Completing Statements': [
    {
        question: 'The company is planning to expand its operations to other countries, ______.',
        options: [
            'and has started hiring more employees.',
            'but will remain in the local market only.',
            'because they have decided to close operations.',
            'so they are reducing their workforce.'
        ],
        correctAnswer: 'and has started hiring more employees.',
    },
    {
        question: 'He was determined to win the race, ______.',
        options: [
            'even though he had never trained for it.',
            'but he decided not to compete.',
            'so he chose not to participate.',
            'although he had already won last year.'
        ],
        correctAnswer: 'even though he had never trained for it.',
    },
    {
        question: 'If she had known about the traffic, ______.',
        options: [
            'she would have left home earlier.',
            'she will leave home earlier.',
            'she might leave home later.',
            'she will not reach on time.'
        ],
        correctAnswer: 'she would have left home earlier.',
    },
    {
        question: 'The teacher canceled the class, ______.',
        options: [
            'and the students went home.',
            'so the students had to attend anyway.',
            'because there was no room available.',
            'but the students stayed for an extra lecture.'
        ],
        correctAnswer: 'and the students went home.',
    },
    {
        question: 'The meeting will be postponed, ______.',
        options: [
            'unless the manager arrives on time.',
            'because the manager is on leave.',
            'since everyone attended on time.',
            'even if the manager arrives.'
        ],
        correctAnswer: 'unless the manager arrives on time.',
    },
    {
        question: 'She was excited about the vacation, ______.',
        options: [
            'until she realized she had no time to pack.',
            'because she had no interest in going.',
            'and decided to cancel it.',
            'even though she wasn’t going anywhere.'
        ],
        correctAnswer: 'until she realized she had no time to pack.',
    },
    {
        question: 'He left the office early, ______.',
        options: [
            'because he had completed all his work.',
            'although he still had a lot of work to do.',
            'so that he could work overtime.',
            'but stayed longer than expected.'
        ],
        correctAnswer: 'because he had completed all his work.',
    },
    {
        question: 'The weather was getting worse, ______.',
        options: [
            'so they decided to postpone the event.',
            'so they planned the event outdoors.',
            'yet the event was held without delay.',
            'and everyone enjoyed the sunshine.'
        ],
        correctAnswer: 'so they decided to postpone the event.',
    },
    {
        question: 'The project was successful, ______.',
        options: [
            'although they had very little time to complete it.',
            'but they decided to abandon it halfway.',
            'because they didn’t start on time.',
            'so they were unable to meet the deadline.'
        ],
        correctAnswer: 'although they had very little time to complete it.',
    },
    {
        question: 'The train was delayed, ______.',
        options: [
            'so they missed their connecting flight.',
            'and they managed to reach their destination on time.',
            'but they still caught their flight easily.',
            'because they were too early at the station.'
        ],
        correctAnswer: 'so they missed their connecting flight.',
    },
    {
        question: 'She decided to study medicine, ______.',
        options: [
            'because she wanted to help people.',
            'but later chose a different career.',
            'although she hated hospitals.',
            'and dropped out after one semester.'
        ],
        correctAnswer: 'because she wanted to help people.',
    },
    {
        question: 'The restaurant was crowded, ______.',
        options: [
            'so we had to wait for a table.',
            'but we found a seat right away.',
            'even though there was no one there.',
            'because it was closed for renovation.'
        ],
        correctAnswer: 'so we had to wait for a table.',
    },
    {
        question: 'He forgot to bring his notebook, ______.',
        options: [
            'so he couldn’t take notes in class.',
            'but still managed to take plenty of notes.',
            'even though he didn’t need it.',
            'because he had a spare notebook.'
        ],
        correctAnswer: 'so he couldn’t take notes in class.',
    },
    {
        question: 'I love reading mystery novels, ______.',
        options: [
            'but I can never guess the ending.',
            'so I never read any books.',
            'because I know exactly how they end.',
            'even though I don’t enjoy reading.'
        ],
        correctAnswer: 'but I can never guess the ending.',
    },
    {
        question: 'She studied hard for the exam, ______.',
        options: [
            'so she was confident about her results.',
            'but failed to perform well.',
            'and couldn’t understand the questions.',
            'although she didn’t sit for it.'
        ],
        correctAnswer: 'so she was confident about her results.',
    },
    {
        question: 'The CEO announced the new project, ______.',
        options: [
            'and everyone was excited to start.',
            'so everyone lost interest immediately.',
            'but no one was interested in it.',
            'even though the project was canceled.'
        ],
        correctAnswer: 'and everyone was excited to start.',
    },
    {
        question: 'The team worked late into the night, ______.',
        options: [
            'but they still couldn’t finish the project.',
            'and finished the project ahead of schedule.',
            'because they had already completed their task.',
            'so they took a break from work.'
        ],
        correctAnswer: 'but they still couldn’t finish the project.',
    },
    {
        question: 'They canceled the concert, ______.',
        options: [
            'because of the bad weather.',
            'although it was a sunny day.',
            'but everyone showed up anyway.',
            'so they had a larger crowd than expected.'
        ],
        correctAnswer: 'because of the bad weather.',
    },
    {
        question: 'The report was due today, ______.',
        options: [
            'but the team asked for an extension.',
            'so the team started working on it next week.',
            'even though the project was completed last month.',
            'because no one worked on it in time.'
        ],
        correctAnswer: 'but the team asked for an extension.',
    },
    {
        question: 'She couldn’t attend the meeting, ______.',
        options: [
            'so she asked someone to take notes for her.',
            'but she was there for the entire discussion.',
            'although she organized the whole event.',
            'because she was in the meeting the whole time.'
        ],
        correctAnswer: 'so she asked someone to take notes for her.',
    },
],

        'Ordering of Sentences': [
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: He was a great poet. \nQ: Shakespeare wrote many plays and poems. \nR: He lived in England. \nS: His plays are still performed today.',
        options: [
            'P Q R S',
            'Q P R S',
            'R S Q P',
            'S P Q R',
        ],
        correctAnswer: 'Q P R S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: Many people recycle their waste. \nQ: This helps reduce the amount of waste in landfills. \nR: Recycling is important for the environment. \nS: It also conserves natural resources.',
        options: [
            'R P Q S',
            'P Q R S',
            'S R P Q',
            'Q S P R',
        ],
        correctAnswer: 'R P Q S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: My brother has a new bike. \nQ: He rides it to school every day. \nR: He got it as a birthday present. \nS: He loves his bike a lot.',
        options: [
            'P R Q S',
            'R P S Q',
            'P Q S R',
            'R Q P S',
        ],
        correctAnswer: 'P R Q S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: The earth orbits around the sun. \nQ: This takes about 365 days. \nR: The earth’s orbit is elliptical. \nS: That’s why we have different seasons.',
        options: [
            'P R Q S',
            'R P Q S',
            'P S R Q',
            'Q S P R',
        ],
        correctAnswer: 'P R Q S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: He was a famous inventor. \nQ: Thomas Edison was born in 1847. \nR: He invented the electric bulb. \nS: He worked on many other inventions as well.',
        options: [
            'P Q R S',
            'Q P R S',
            'R S Q P',
            'S P Q R',
        ],
        correctAnswer: 'Q P R S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: The train was late by two hours. \nQ: We waited at the station. \nR: Finally, it arrived at 8 PM. \nS: We boarded the train quickly.',
        options: [
            'P Q R S',
            'Q P R S',
            'S R Q P',
            'Q R S P',
        ],
        correctAnswer: 'Q P R S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: He is my best friend. \nQ: We met in college. \nR: We share many interests. \nS: We have been friends for ten years.',
        options: [
            'P Q R S',
            'Q R S P',
            'S P Q R',
            'P S Q R',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: It was raining heavily. \nQ: I forgot to bring my umbrella. \nR: I got completely soaked. \nS: I ran home as quickly as I could.',
        options: [
            'Q P S R',
            'P Q R S',
            'R S Q P',
            'S P Q R',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: There are four seasons in a year. \nQ: Winter is the coldest season. \nR: Summer is the hottest season. \nS: Spring and autumn have mild weather.',
        options: [
            'P S R Q',
            'P Q S R',
            'R P S Q',
            'Q S P R',
        ],
        correctAnswer: 'P S R Q',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: She decided to bake a cake. \nQ: She preheated the oven. \nR: She mixed the ingredients. \nS: She poured the mixture into a pan.',
        options: [
            'P R Q S',
            'P Q S R',
            'Q R S P',
            'R S P Q',
        ],
        correctAnswer: 'P R Q S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: The school bus was late. \nQ: We waited for a long time. \nR: It arrived at last. \nS: We quickly got on board.',
        options: [
            'P Q R S',
            'S P Q R',
            'R S P Q',
            'Q P S R',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: The cat chased the mouse. \nQ: The mouse ran fast. \nR: It hid behind the sofa. \nS: The cat couldn’t find it.',
        options: [
            'P Q R S',
            'S P Q R',
            'R S P Q',
            'Q P S R',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: It was a dark and stormy night. \nQ: The wind howled outside. \nR: I was curled up by the fireplace. \nS: The rain beat against the windows.',
        options: [
            'P Q S R',
            'Q R S P',
            'P S Q R',
            'S P R Q',
        ],
        correctAnswer: 'P Q S R',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: The plane took off smoothly. \nQ: We were asked to fasten our seatbelts. \nR: The pilot made an announcement. \nS: The flight attendants served refreshments.',
        options: [
            'P Q R S',
            'R P Q S',
            'Q R P S',
            'P S R Q',
        ],
        correctAnswer: 'Q R P S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: The library was quiet. \nQ: I found a comfortable seat. \nR: I started reading a novel. \nS: I stayed there for two hours.',
        options: [
            'P Q R S',
            'R S P Q',
            'Q R P S',
            'P S Q R',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: She loves reading books. \nQ: She reads for two hours every night. \nR: She always borrows books from the library. \nS: Her favorite genre is mystery novels.',
        options: [
            'P S Q R',
            'R P Q S',
            'S R P Q',
            'P Q R S',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: The baby was crying loudly. \nQ: The mother picked her up. \nR: She rocked the baby gently. \nS: The baby stopped crying.',
        options: [
            'P Q R S',
            'S P Q R',
            'R S P Q',
            'Q R P S',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: The sun set behind the mountains. \nQ: The sky turned orange and pink. \nR: The stars started to appear. \nS: The night became quiet and peaceful.',
        options: [
            'P Q R S',
            'Q P S R',
            'R S P Q',
            'S P Q R',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences in a logical sequence: \n\nP: The teacher entered the classroom. \nQ: She greeted the students. \nR: She started writing on the board. \nS: The students listened attentively.',
        options: [
            'P Q R S',
            'S P Q R',
            'R S P Q',
            'Q P S R',
        ],
        correctAnswer: 'P Q R S',
    },
  ],
       'Paragraph Formation': [
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: The sun provides light and warmth. \nQ: Without the sun, life on Earth would not exist. \nR: It also helps plants grow by providing energy. \nS: The sun is essential for all forms of life on Earth.',
        options: [
            'P S R Q',
            'S Q P R',
            'P R S Q',
            'Q P S R',
        ],
        correctAnswer: 'P R S Q',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Technology has greatly improved communication. \nQ: Today, people can communicate instantly through email, messaging, and social media. \nR: In the past, letters and telegrams were the primary forms of long-distance communication. \nS: The internet has made global communication faster and easier.',
        options: [
            'P Q S R',
            'R P Q S',
            'S P Q R',
            'P S R Q',
        ],
        correctAnswer: 'R P Q S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: A balanced diet is important for maintaining good health. \nQ: It should include a variety of foods, such as fruits, vegetables, and proteins. \nR: Eating a variety of foods ensures that the body gets all the nutrients it needs. \nS: Regular exercise is also necessary for staying healthy.',
        options: [
            'P R S Q',
            'P Q R S',
            'S P Q R',
            'Q R P S',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Reading is a great way to expand your knowledge. \nQ: It can help improve your vocabulary and writing skills. \nR: Books offer a wide range of topics, from history to science fiction. \nS: Many people find reading to be a relaxing and enjoyable activity.',
        options: [
            'P Q S R',
            'R S P Q',
            'P R S Q',
            'S P Q R',
        ],
        correctAnswer: 'P Q S R',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Traveling to new places can be a wonderful experience. \nQ: It allows you to learn about different cultures and traditions. \nR: Meeting new people and tasting local food are highlights of traveling. \nS: Traveling also helps you gain a new perspective on life.',
        options: [
            'P Q R S',
            'Q P S R',
            'P S Q R',
            'R S P Q',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Trees play a crucial role in maintaining the environment. \nQ: They provide oxygen and absorb carbon dioxide. \nR: Forests are home to a wide variety of animals and plants. \nS: Cutting down trees can have a devastating impact on biodiversity.',
        options: [
            'P R Q S',
            'P Q R S',
            'S P Q R',
            'Q P S R',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Exercise is essential for a healthy lifestyle. \nQ: It helps in maintaining a healthy weight and reduces the risk of diseases. \nR: Physical activity also boosts mental health by reducing stress and anxiety. \nS: Regular exercise can improve sleep quality and increase energy levels.',
        options: [
            'P Q S R',
            'P R Q S',
            'P Q R S',
            'S P Q R',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Education is the key to a better future. \nQ: It opens doors to opportunities that can lead to success. \nR: A good education provides individuals with the skills needed to succeed in the workplace. \nS: It also helps people become more informed and responsible citizens.',
        options: [
            'P Q R S',
            'R P Q S',
            'S P Q R',
            'P R S Q',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: The internet has revolutionized the way we access information. \nQ: It allows people to find information quickly and easily. \nR: With the internet, students can research topics for their studies in just a few clicks. \nS: However, it is important to verify the credibility of online sources.',
        options: [
            'P Q R S',
            'Q R P S',
            'P S Q R',
            'R P S Q',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Climate change is one of the biggest challenges facing the world today. \nQ: Human activities, such as burning fossil fuels, are the main causes of climate change. \nR: It leads to rising global temperatures and extreme weather events. \nS: Governments and individuals must take action to reduce carbon emissions.',
        options: [
            'P Q R S',
            'R P Q S',
            'S P Q R',
            'Q R P S',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Water is essential for all living organisms. \nQ: It helps regulate body temperature and supports vital bodily functions. \nR: Clean water is necessary for drinking, cooking, and sanitation. \nS: Conserving water is crucial, as many regions face water scarcity.',
        options: [
            'P Q R S',
            'S P Q R',
            'P R Q S',
            'Q S P R',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Social media has become an integral part of modern life. \nQ: It allows people to connect with friends and family, no matter where they are. \nR: Social media platforms are also used by businesses to reach customers. \nS: However, excessive use of social media can have negative effects on mental health.',
        options: [
            'P Q R S',
            'R P Q S',
            'P R S Q',
            'S P Q R',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Many animals are at risk of extinction due to habitat loss. \nQ: Deforestation and urbanization are the main causes of habitat destruction. \nR: Conservation efforts are needed to protect endangered species. \nS: Wildlife reserves and protected areas help preserve natural habitats.',
        options: [
            'P Q R S',
            'Q P R S',
            'R P S Q',
            'S R Q P',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Renewable energy sources, such as solar and wind power, are gaining popularity. \nQ: Unlike fossil fuels, they do not produce harmful emissions. \nR: Solar panels and wind turbines are becoming more affordable. \nS: Governments are encouraging the use of renewable energy through incentives and subsidies.',
        options: [
            'P Q R S',
            'Q P R S',
            'R P S Q',
            'S P Q R',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Teamwork is essential for the success of any organization. \nQ: It fosters collaboration and innovation. \nR: Teams that work well together can solve problems more effectively. \nS: Good communication is the key to successful teamwork.',
        options: [
            'P Q R S',
            'S P Q R',
            'P R Q S',
            'Q P R S',
        ],
        correctAnswer: 'P Q R S',
    },
    {
        question: 'Arrange the following sentences to form a coherent paragraph: \n\nP: Online education is becoming more popular. \nQ: It allows students to learn at their own pace from the comfort of their homes. \nR: Many universities now offer online courses and degree programs. \nS: However, it requires self-discipline and time management skills.',
        options: [
            'P Q R S',
            'R P Q S',
            'P S Q R',
            'S P Q R',
        ],
        correctAnswer: 'P Q R S',
    },
  ],
      },
    },
    {
      name: 'Logical Reasoning',
      description: 'Data and graph-based problem-solving.',
      folders: {
        'Coding and Decoding': [
    {
        question: 'In a certain code language, "APPLE" is written as "ELPPA". How will "ORANGE" be written in that code?',
        options: ['EGNARO', 'EGNRAO', 'OENGAR', 'ENAGRO'],
        correctAnswer: 'EGNARO',
    },
    {
        question: 'If "FIRE" is coded as "ERIF", how will "WATER" be coded?',
        options: ['RETAW', 'RAWET', 'WTERA', 'WERT'],
        correctAnswer: 'RETAW',
    },
    {
        question: 'In a code, "CAT" is written as "3120". How is "DOG" written in that code?',
        options: ['4187', '4718', '4719', '4189'],
        correctAnswer: '4719',
    },
    {
        question: 'In a certain language, "MANGO" is written as "NBLHP". How will "PINE" be written?',
        options: ['QJMF', 'OKOD', 'OHMF', 'RJOD'],
        correctAnswer: 'QJMF',
    },
    {
        question: 'If "CAR" is written as "36", "BUS" is written as "42", how will "TRAIN" be written?',
        options: ['60', '72', '65', '58'],
        correctAnswer: '65',
    },
    {
        question: 'In a certain code, "HELLO" is written as "JGNNQ". How is "WORLD" written in that code?',
        options: ['YQTFN', 'XQTMF', 'YTMFN', 'YPSLD'],
        correctAnswer: 'YQTFN',
    },
    {
        question: 'If "LION" is coded as "3127", and "TIGER" is coded as "29517", how is "BEAR" written?',
        options: ['2518', '2947', '2517', '2918'],
        correctAnswer: '2518',
    },
    {
        question: 'In a certain code language, "SHAPE" is written as "UJCNG". How will "ANGLE" be written?',
        options: ['CPIJG', 'CPLIF', 'CPLJG', 'CPIJG'],
        correctAnswer: 'CPIJG',
    },
    {
        question: 'In a code, "PHONE" is written as "QIPOF". How will "MOUSE" be written?',
        options: ['NVVTG', 'NPTUF', 'MPVUF', 'NRUTG'],
        correctAnswer: 'NPTUF',
    },
    {
        question: 'If "SUGAR" is coded as "URICT", how is "SALT" written?',
        options: ['UCTV', 'TBMV', 'TBKU', 'TBKV'],
        correctAnswer: 'TBKU',
    },
    {
        question: 'In a code language, "PEN" is written as "RGP". How will "BOOK" be written?',
        options: ['DQPM', 'DPQM', 'DROO', 'DROK'],
        correctAnswer: 'DROO',
    },
    {
        question: 'If "TEACHER" is coded as "VGCEJGT", how is "STUDENT" coded?',
        options: ['UVWFGRV', 'UVVFGTV', 'UVVFHVT', 'UWRFGTV'],
        correctAnswer: 'UVWFGRV',
    },
    {
        question: 'In a code, "TABLE" is written as "VCVNG". How will "CHAIR" be written?',
        options: ['EKCKT', 'CICJT', 'EKCJT', 'EKBKT'],
        correctAnswer: 'EKCJT',
    },
    {
        question: 'If "RAIN" is written as "TCKP", how will "SUN" be written?',
        options: ['UVP', 'UVR', 'WVP', 'WVR'],
        correctAnswer: 'UVR',
    },
    {
        question: 'In a code language, "FOOD" is written as "GPPD". How will "EAT" be written?',
        options: ['FBV', 'FBV', 'FBU', 'FBS'],
        correctAnswer: 'FBV',
    },
    {
        question: 'If "BRIGHT" is written as "DTIJHV", how is "SHINY" coded?',
        options: ['ULKQA', 'VKMQB', 'VKNQA', 'ULNQB'],
        correctAnswer: 'ULNQB',
    },
    {
        question: 'In a certain language, "PENCIL" is written as "QLPDJM". How will "ERASER" be written?',
        options: ['FTBTFS', 'FTBTFR', 'FSBTFR', 'FTBSFR'],
        correctAnswer: 'FTBTFR',
    },
    {
        question: 'If "GOLD" is written as "IQNF", how is "SILVER" written?',
        options: ['UKNXFT', 'UKNDFT', 'VLNXFT', 'ULNXFT'],
        correctAnswer: 'ULNXFT',
    },
    {
        question: 'In a code language, "TABLE" is written as "PYCQG". How will "CHAIR" be written?',
        options: ['BZGPQ', 'FYBPR', 'BYCQS', 'BXGQS'],
        correctAnswer: 'BYCQS',
    },
    {
        question: 'If "WATER" is coded as "YCVGT", how is "FIRE" coded?',
        options: ['HKTG', 'HKTG', 'GKRF', 'GJTG'],
        correctAnswer: 'HKTG',
    },
],

        'Blood Relations': [
    {
        question: 'Pointing to a photograph, Amar said, "She is the daughter of my grandfather’s only son." How is the girl in the photograph related to Amar?',
        options: ['Mother', 'Sister', 'Cousin', 'Aunt'],
        correctAnswer: 'Sister',
    },
    {
        question: 'If A is the brother of B, B is the sister of C, and C is the father of D, how is A related to D?',
        options: ['Father', 'Uncle', 'Brother', 'Grandfather'],
        correctAnswer: 'Uncle',
    },
    {
        question: 'Pointing to a woman in a photograph, Ram said, "Her father’s only son is my father." How is the woman in the photograph related to Ram?',
        options: ['Mother', 'Aunt', 'Sister', 'Cousin'],
        correctAnswer: 'Sister',
    },
    {
        question: 'If P is the father of Q, but Q is not the son of P, what is the relationship between P and Q?',
        options: ['Daughter', 'Father', 'Son', 'Uncle'],
        correctAnswer: 'Daughter',
    },
    {
        question: 'A man said, "This girl is the wife of the grandson of my mother." How is the man related to the girl?',
        options: ['Father-in-law', 'Grandfather', 'Uncle', 'Husband'],
        correctAnswer: 'Father-in-law',
    },
    {
        question: 'Introducing a boy, Sheela said, "He is the son of my mother’s only son." How is Sheela related to the boy?',
        options: ['Mother', 'Aunt', 'Grandmother', 'Sister'],
        correctAnswer: 'Grandmother',
    },
    {
        question: 'Pointing to a woman, Ravi said, "She is the daughter of the only son of my grandfather." How is the woman related to Ravi?',
        options: ['Cousin', 'Sister', 'Mother', 'Aunt'],
        correctAnswer: 'Sister',
    },
    {
        question: 'If A is the son of B, and B is the sister of C, how is A related to C?',
        options: ['Nephew', 'Son', 'Uncle', 'Cousin'],
        correctAnswer: 'Nephew',
    },
    {
        question: 'Pointing to a man, Shyam said, "His only son is my daughter’s father." How is Shyam related to the man?',
        options: ['Son', 'Brother', 'Father', 'Grandson'],
        correctAnswer: 'Son',
    },
    {
        question: 'If X is the father of Y, and Y is the son of Z, how is Z related to X?',
        options: ['Wife', 'Father', 'Mother', 'Uncle'],
        correctAnswer: 'Wife',
    },
    {
        question: 'A woman said, "This man is the brother of the daughter of my husband." How is the man related to the woman?',
        options: ['Son', 'Brother', 'Uncle', 'Father'],
        correctAnswer: 'Son',
    },
    {
        question: 'Pointing to a person, Ajay said, "His only brother is the father of my son." How is Ajay related to the person?',
        options: ['Father', 'Uncle', 'Brother', 'Cousin'],
        correctAnswer: 'Brother',
    },
    {
        question: 'If P is the father of Q, and Q is the brother of R, how is P related to R?',
        options: ['Father', 'Uncle', 'Brother', 'Grandfather'],
        correctAnswer: 'Father',
    },
    {
        question: 'Pointing to a boy, Meera said, "He is the son of my father’s only son." How is the boy related to Meera?',
        options: ['Brother', 'Son', 'Grandson', 'Nephew'],
        correctAnswer: 'Son',
    },
    {
        question: 'A man said to a woman, "Your mother’s husband’s sister is my aunt." How is the woman related to the man?',
        options: ['Sister', 'Cousin', 'Mother', 'Niece'],
        correctAnswer: 'Cousin',
    },
    {
        question: 'Pointing to a person, Ram said, "Her mother is the only daughter of my mother." How is Ram related to the person?',
        options: ['Father', 'Brother', 'Uncle', 'Cousin'],
        correctAnswer: 'Father',
    },
    {
        question: 'A woman says, "If you reverse the relationship between me and my sister’s only son, he becomes my father." What is the relationship between the woman and the man?',
        options: ['Mother and Son', 'Daughter and Father', 'Sister and Brother', 'Aunt and Nephew'],
        correctAnswer: 'Mother and Son',
    },
    {
        question: 'If M is the brother of N, N is the son of O, and O is the daughter of P, how is M related to P?',
        options: ['Grandson', 'Son', 'Uncle', 'Brother'],
        correctAnswer: 'Grandson',
    },
    {
        question: 'If A is married to B, and B is the mother of C, how is A related to C?',
        options: ['Father', 'Son', 'Brother', 'Uncle'],
        correctAnswer: 'Father',
    },
    {
        question: 'A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?',
        options: ['Cousin', 'Nephew', 'Uncle', 'Brother'],
        correctAnswer: 'Cousin',
    },
],

       'Number Series': [
    {
        question: 'What is the next number in the series: 2, 4, 8, 16, ?',
        options: ['20', '32', '64', '128'],
        correctAnswer: '32',
    },
    {
        question: 'What comes next in the series: 5, 11, 17, 23, ?',
        options: ['27', '29', '31', '35'],
        correctAnswer: '29',
    },
    {
        question: 'What is the missing number in the series: 100, 97, 94, ?, 88, 85?',
        options: ['91', '92', '90', '89'],
        correctAnswer: '91',
    },
    {
        question: 'Find the next number in the sequence: 1, 1, 2, 6, 24, ?',
        options: ['72', '120', '144', '180'],
        correctAnswer: '120',
    },
    {
        question: 'What number should replace the question mark: 3, 6, 18, 72, ?',
        options: ['288', '144', '360', '216'],
        correctAnswer: '288',
    },
    {
        question: 'What is the missing number in the sequence: 7, 14, 28, 56, ?',
        options: ['84', '108', '112', '98'],
        correctAnswer: '112',
    },
    {
        question: 'Find the missing number: 1, 4, 9, 16, ?, 36',
        options: ['20', '25', '28', '32'],
        correctAnswer: '25',
    },
    {
        question: 'What is the next number in the sequence: 2, 3, 5, 9, 17, ?',
        options: ['25', '33', '29', '30'],
        correctAnswer: '33',
    },
    {
        question: 'Find the missing number: 12, 11, 9, 6, ?, -1',
        options: ['3', '5', '2', '4'],
        correctAnswer: '3',
    },
    {
        question: 'What is the next number in the series: 0, 3, 8, 15, 24, ?',
        options: ['33', '35', '36', '38'],
        correctAnswer: '35',
    },
    {
        question: 'What comes next in the sequence: 21, 25, 30, 36, ?',
        options: ['40', '41', '43', '45'],
        correctAnswer: '43',
    },
    {
        question: 'Find the next number in the series: 3, 6, 12, 24, ?',
        options: ['32', '36', '42', '48'],
        correctAnswer: '48',
    },
    {
        question: 'What number should replace the question mark: 10, 14, 18, ?, 26, 30',
        options: ['20', '21', '22', '23'],
        correctAnswer: '22',
    },
    {
        question: 'What comes next in the series: 16, 23, 31, 40, ?',
        options: ['47', '48', '50', '52'],
        correctAnswer: '50',
    },
    {
        question: 'Find the missing number: 13, 19, 25, ?, 37',
        options: ['29', '30', '31', '32'],
        correctAnswer: '31',
    },
    {
        question: 'What is the next number in the series: 7, 14, 21, 28, ?',
        options: ['35', '38', '40', '42'],
        correctAnswer: '35',
    },
    {
        question: 'Find the missing number in the sequence: 2, 5, 9, 14, 20, ?',
        options: ['25', '27', '26', '29'],
        correctAnswer: '27',
    },
    {
        question: 'What number should replace the question mark: 1, 3, 6, 10, 15, ?',
        options: ['21', '20', '25', '18'],
        correctAnswer: '21',
    },
    {
        question: 'Find the missing number: 45, 40, 35, ?, 25, 20',
        options: ['30', '32', '28', '27'],
        correctAnswer: '30',
    },
    {
        question: 'What is the next number in the series: 5, 10, 15, 20, ?',
        options: ['25', '30', '35', '40'],
        correctAnswer: '25',
    },
],

       'Letter and Symbol Series': [
    {
        question: 'What comes next in the series: A, C, E, G, ?',
        options: ['H', 'I', 'J', 'K'],
        correctAnswer: 'I',
    },
    {
        question: 'What comes next in the series: Z, X, V, T, ?',
        options: ['R', 'S', 'Q', 'P'],
        correctAnswer: 'R',
    },
    {
        question: 'What is the next symbol in the series: @, #, @, #, ?',
        options: ['$', '@', '#', '%'],
        correctAnswer: '@',
    },
    {
        question: 'Find the missing letter: B, D, G, K, ?',
        options: ['M', 'N', 'P', 'Q'],
        correctAnswer: 'P',
    },
    {
        question: 'What comes next in the series: J, L, N, P, ?',
        options: ['Q', 'R', 'S', 'T'],
        correctAnswer: 'R',
    },
    {
        question: 'Find the missing letter: M, P, S, V, ?',
        options: ['X', 'Y', 'Z', 'U'],
        correctAnswer: 'Y',
    },
    {
        question: 'What symbol should replace the question mark: %, &, @, #, ?',
        options: ['$', '^', '*', '&'],
        correctAnswer: '$',
    },
    {
        question: 'What comes next in the series: C, F, I, L, ?',
        options: ['O', 'N', 'Q', 'P'],
        correctAnswer: 'O',
    },
    {
        question: 'Find the missing symbol: !, ?, !, ?, ?',
        options: ['!', '$', '&', '*'],
        correctAnswer: '!',
    },
    {
        question: 'What comes next in the series: P, S, V, Y, ?',
        options: ['A', 'B', 'Z', 'C'],
        correctAnswer: 'B',
    },
    {
        question: 'What letter should replace the question mark: E, G, I, K, ?',
        options: ['M', 'O', 'N', 'P'],
        correctAnswer: 'M',
    },
    {
        question: 'What comes next in the series: X, T, P, L, ?',
        options: ['H', 'J', 'F', 'G'],
        correctAnswer: 'H',
    },
    {
        question: 'Find the missing symbol: #, @, &, !, ?',
        options: ['$', '%', '^', '*'],
        correctAnswer: '%',
    },
    {
        question: 'What letter comes next in the series: A, C, E, G, ?',
        options: ['H', 'J', 'I', 'K'],
        correctAnswer: 'I',
    },
    {
        question: 'What is the next symbol in the series: &, %, &, %, ?',
        options: ['%', '&', '#',' $'],
        correctAnswer: '&',
    },
    {
        question: 'What letter comes next in the series: L, N, P, R, ?',
        options: ['S', 'T', 'U', 'V'],
        correctAnswer: 'T',
    },
    {
        question: 'What comes next in the series: B, F, J, N, ?',
        options: ['R', 'S', 'Q', 'T'],
        correctAnswer: 'R',
    },
    {
        question: 'Find the missing symbol: *, @, #, &, ?',
        options: ['%', '*',' $', '!'],
        correctAnswer: '%',
    },
    {
        question: 'What letter should replace the question mark: H, J, L, N, ?',
        options: ['P', 'Q', 'O', 'R'],
        correctAnswer: 'P',
    },
    {
        question: 'What comes next in the series: C, F, I, L, ?',
        options: ['O', 'Q', 'M', 'P'],
        correctAnswer: 'O',
    },
],

       'Verbal Classification': [
    {
        question: 'Which word does not belong with the others?',
        options: ['Triangle', 'Circle', 'Square', 'Rectangle'],
        correctAnswer: 'Circle',
    },
    {
        question: 'Which word is different from the rest?',
        options: ['Dog', 'Cat', 'Hamster', 'Car'],
        correctAnswer: 'Car',
    },
    {
        question: 'Which word does not fit in the group?',
        options: ['Violin', 'Flute', 'Drum', 'Laptop'],
        correctAnswer: 'Laptop',
    },
    {
        question: 'Find the odd one out:',
        options: ['Apple', 'Banana', 'Carrot', 'Mango'],
        correctAnswer: 'Carrot',
    },
    {
        question: 'Which word does not belong?',
        options: ['Red', 'Green', 'Blue', 'Water'],
        correctAnswer: 'Water',
    },
    {
        question: 'Which of the following is different?',
        options: ['Desk', 'Chair', 'Sofa', 'Television'],
        correctAnswer: 'Television',
    },
    {
        question: 'Which word does not fit?',
        options: ['Pen', 'Pencil', 'Eraser', 'Book'],
        correctAnswer: 'Book',
    },
    {
        question: 'Which one is the odd one out?',
        options: ['Bread', 'Butter', 'Cheese', 'Phone'],
        correctAnswer: 'Phone',
    },
    {
        question: 'Find the word that does not belong:',
        options: ['Lion', 'Tiger', 'Elephant', 'Rose'],
        correctAnswer: 'Rose',
    },
    {
        question: 'Which item is different?',
        options: ['Shoes', 'Socks', 'Hat', 'Computer'],
        correctAnswer: 'Computer',
    },
    {
        question: 'Which word does not belong with the others?',
        options: ['Gold', 'Silver', 'Copper', 'Paper'],
        correctAnswer: 'Paper',
    },
    {
        question: 'Find the odd word:',
        options: ['House', 'Apartment', 'Cabin', 'Forest'],
        correctAnswer: 'Forest',
    },
    {
        question: 'Which one is different?',
        options: ['Cucumber', 'Potato', 'Tomato', 'Lamp'],
        correctAnswer: 'Lamp',
    },
    {
        question: 'Which of the following is not like the others?',
        options: ['Cat', 'Dog', 'Mouse', 'Truck'],
        correctAnswer: 'Truck',
    },
    {
        question: 'Which word does not fit?',
        options: ['Car', 'Bike', 'Train', 'Shirt'],
        correctAnswer: 'Shirt',
    },
    {
        question: 'Which is the odd one?',
        options: ['Teacher', 'Engineer', 'Nurse', 'Car'],
        correctAnswer: 'Car',
    },
    {
        question: 'Which one is not like the others?',
        options: ['Sugar', 'Flour', 'Salt', 'Fan'],
        correctAnswer: 'Fan',
    },
    {
        question: 'Find the odd word out:',
        options: ['Paris', 'London', 'Tokyo', 'Radio'],
        correctAnswer: 'Radio',
    },
    {
        question: 'Which word does not belong?',
        options: ['Computer', 'Keyboard', 'Mouse', 'Apple'],
        correctAnswer: 'Apple',
    },
    {
        question: 'Which of the following is different?',
        options: ['Plane', 'Boat', 'Train', 'Television'],
        correctAnswer: 'Television',
    },
],

        'Essential Part': [
    {
        question: 'What is the essential part of a car?',
        options: ['Wheels', 'Steering Wheel', 'Engine', 'Seats'],
        correctAnswer: 'Engine',
    },
    {
        question: 'Which part is essential for a bicycle?',
        options: ['Brakes', 'Handlebars', 'Pedals', 'Saddle'],
        correctAnswer: 'Pedals',
    },
    {
        question: 'What is the essential part of a computer?',
        options: ['Monitor', 'Mouse', 'CPU', 'Keyboard'],
        correctAnswer: 'CPU',
    },
    {
        question: 'Which is the essential part of a book?',
        options: ['Cover', 'Pages', 'Title', 'Author'],
        correctAnswer: 'Pages',
    },
    {
        question: 'What is an essential part of a sandwich?',
        options: ['Bread', 'Lettuce', 'Tomato', 'Cheese'],
        correctAnswer: 'Bread',
    },
    {
        question: 'Which part is essential in a recipe?',
        options: ['Instructions', 'Ingredients', 'Serving Size', 'Cooking Time'],
        correctAnswer: 'Ingredients',
    },
    {
        question: 'What is an essential part of a plant?',
        options: ['Flower', 'Leaf', 'Root', 'Stem'],
        correctAnswer: 'Root',
    },
    {
        question: 'Which part is essential for a successful presentation?',
        options: ['Slides', 'Speaker Notes', 'Audience', 'Visual Aids'],
        correctAnswer: 'Slides',
    },
    {
        question: 'What is an essential part of a story?',
        options: ['Characters', 'Setting', 'Plot', 'Conflict'],
        correctAnswer: 'Plot',
    },
    {
        question: 'Which is an essential part of a smartphone?',
        options: ['Screen', 'Battery', 'Camera', 'Charger'],
        correctAnswer: 'Battery',
    },
    {
        question: 'What is the essential part of a film?',
        options: ['Director', 'Actors', 'Script', 'Cinematography'],
        correctAnswer: 'Script',
    },
    {
        question: 'Which part is essential for a house?',
        options: ['Walls', 'Roof', 'Foundation', 'Windows'],
        correctAnswer: 'Foundation',
    },
    {
        question: 'What is the essential part of a musical instrument?',
        options: ['Strings', 'Body', 'Neck', 'Fretboard'],
        correctAnswer: 'Body',
    },
    {
        question: 'Which part is essential in a relationship?',
        options: ['Trust', 'Communication', 'Compromise', 'Respect'],
        correctAnswer: 'Communication',
    },
    {
        question: 'What is the essential part of a computer program?',
        options: ['Source Code', 'User Interface', 'Database', 'Documentation'],
        correctAnswer: 'Source Code',
    },
    {
        question: 'Which is the essential part of a bicycle?',
        options: ['Frame', 'Tires', 'Brakes', 'Chain'],
        correctAnswer: 'Frame',
    },
    {
        question: 'What is the essential part of a meal?',
        options: ['Appetizer', 'Main Course', 'Dessert', 'Beverage'],
        correctAnswer: 'Main Course',
    },
    {
        question: 'Which part is essential in education?',
        options: ['Curriculum', 'Assessment', 'Classroom', 'Teacher'],
        correctAnswer: 'Curriculum',
    },
    {
        question: 'What is the essential part of a game?',
        options: ['Rules', 'Players', 'Scoreboard', 'Equipment'],
        correctAnswer: 'Rules',
    },
    {
        question: 'Which part is essential for a healthy diet?',
        options: ['Fruits', 'Vegetables', 'Proteins', 'Whole Grains'],
        correctAnswer: 'Proteins',
    },
    {
        question: 'What is an essential part of a wedding?',
        options: ['Venue', 'Attire', 'Ceremony', 'Guest List'],
        correctAnswer: 'Ceremony',
    },
],

      'Analogies': [
    {
        question: 'Cat is to Kitten as Dog is to:',
        options: ['Puppy', 'Cub', 'Foal', 'Calf'],
        correctAnswer: 'Puppy',
    },
    {
        question: 'Bird is to Nest as Bee is to:',
        options: ['Honey', 'Hive', 'Flower', 'Pollen'],
        correctAnswer: 'Hive',
    },
    {
        question: 'Fish is to School as Wolf is to:',
        options: ['Pack', 'Herd', 'Flock', 'Swarm'],
        correctAnswer: 'Pack',
    },
    {
        question: 'Tree is to Forest as Flower is to:',
        options: ['Garden', 'Bouquet', 'Field', 'Bush'],
        correctAnswer: 'Garden',
    },
    {
        question: 'Book is to Read as Movie is to:',
        options: ['Watch', 'Listen', 'Discuss', 'Write'],
        correctAnswer: 'Watch',
    },
    {
        question: 'Cold is to Ice as Hot is to:',
        options: ['Fire', 'Steam', 'Sun', 'Magma'],
        correctAnswer: 'Steam',
    },
    {
        question: 'Chef is to Cook as Author is to:',
        options: ['Write', 'Edit', 'Publish', 'Read'],
        correctAnswer: 'Write',
    },
    {
        question: 'Keyboard is to Type as Pen is to:',
        options: ['Write', 'Draw', 'Sketch', 'Paint'],
        correctAnswer: 'Write',
    },
    {
        question: 'Inhale is to Breathe as Eat is to:',
        options: ['Consume', 'Drink', 'Taste', 'Chew'],
        correctAnswer: 'Consume',
    },
    {
        question: 'Teacher is to Classroom as Doctor is to:',
        options: ['Hospital', 'Clinic', 'Office', 'Lab'],
        correctAnswer: 'Hospital',
    },
    {
        question: 'Car is to Drive as Boat is to:',
        options: ['Sail', 'Float', 'Row', 'Anchor'],
        correctAnswer: 'Sail',
    },
    {
        question: 'Instrument is to Music as Tool is to:',
        options: ['Work', 'Craft', 'Build', 'Repair'],
        correctAnswer: 'Work',
    },
    {
        question: 'Fingers are to Hand as Toes are to:',
        options: ['Foot', 'Leg', 'Ankle', 'Knee'],
        correctAnswer: 'Foot',
    },
    {
        question: 'Hammer is to Nail as Screwdriver is to:',
        options: ['Screw', 'Bolt', 'Wrench', 'Nut'],
        correctAnswer: 'Screw',
    },
    {
        question: 'Sun is to Day as Moon is to:',
        options: ['Night', 'Dusk', 'Dawn', 'Eclipse'],
        correctAnswer: 'Night',
    },
    {
        question: 'Pen is to Ink as Pencil is to:',
        options: ['Lead', 'Eraser', 'Paper', 'Sharpener'],
        correctAnswer: 'Lead',
    },
    {
        question: 'King is to Crown as Queen is to:',
        options: ['Tiara', 'Scepter', 'Throne', 'Gown'],
        correctAnswer: 'Tiara',
    },
    {
        question: 'Eyes are to See as Ears are to:',
        options: ['Hear', 'Listen', 'Speak', 'Scream'],
        correctAnswer: 'Hear',
    },
    {
        question: 'Circle is to Round as Square is to:',
        options: ['Cornered', 'Straight', 'Rectangular', 'Flat'],
        correctAnswer: 'Cornered',
    },
    {
        question: 'Seed is to Plant as Egg is to:',
        options: ['Bird', 'Chicken', 'Hatch', 'Nest'],
        correctAnswer: 'Bird',
    },
    {
        question: 'Winter is to Snow as Summer is to:',
        options: ['Heat', 'Rain', 'Sun', 'Sunshine'],
        correctAnswer: 'Heat',
    },
],

        'Artificial Language': [
    {
        question: 'In a certain code, if "APPLE" is coded as "BQMMF", how is "MANGO" coded?',
        options: ['NBOPH', 'NBNGP', 'OBNHP', 'OBNHO'],
        correctAnswer: 'NBOPH',
    },
    {
        question: 'If "DOG" is coded as "12", how is "CAT" coded?',
        options: ['24', '20', '21', '26'],
        correctAnswer: '24',
    },
    {
        question: 'In a certain language, "SCHOOL" is written as "TIDPNM". What is the code for "COLLEGE"?',
        options: ['DPMLHMF', 'DPMLHGO', 'DPMLHGQ', 'DPLMHF'],
        correctAnswer: 'DPMLHGO',
    },
    {
        question: 'If "HAPPY" is coded as "KDVWB", what is the code for "SAD"?',
        options: ['VDF', 'WDF', 'WFE', 'UEG'],
        correctAnswer: 'WDF',
    },
    {
        question: 'In a specific code, if "LIGHT" is written as "QJYKO", what is "DARK" in that code?',
        options: ['GDOQ', 'HDOQ', 'JDOQ', 'FDOQ'],
        correctAnswer: 'GDOQ',
    },
    {
        question: 'If "FISH" is coded as "GJTI", then how is "SHARK" coded?',
        options: ['TIBSL', 'TIBSJ', 'TIBSK', 'TIBSJ'],
        correctAnswer: 'TIBSJ',
    },
    {
        question: 'In a certain language, "TRAIN" is written as "UJQBO". How is "CAR" coded?',
        options: ['EHT', 'EHS', 'FHU', 'FHS'],
        correctAnswer: 'EHT',
    },
    {
        question: 'If "HELLO" is coded as "KHOOR", what is the code for "WORLD"?',
        options: ['ZRUOG', 'ZSUOG', 'ZROUG', 'ZROEG'],
        correctAnswer: 'ZRUOG',
    },
    {
        question: 'In a specific code, if "PEN" is coded as "SQR", what is "PENCIL" coded?',
        options: ['SENCLM', 'SERCMF', 'SFMHCP', 'SRMCJL'],
        correctAnswer: 'SFMHCP',
    },
    {
        question: 'If "BAT" is coded as "CAV", how is "HAT" coded?',
        options: ['IBU', 'IBV', 'IBT', 'IBW'],
        correctAnswer: 'IBU',
    },
    {
        question: 'In a certain code, "GREAT" is written as "HSDVU". What is the code for "PLACE"?',
        options: ['QMBDF', 'QMBEJ', 'QMBFG', 'QMDFJ'],
        correctAnswer: 'QMBDF',
    },
    {
        question: 'If "GREEN" is coded as "IGRGO", how is "BLUE" coded?',
        options: ['BMEF', 'CMEF', 'DMFE', 'EMFE'],
        correctAnswer: 'CMEF',
    },
    {
        question: 'In a specific code, if "CODE" is written as "DQFE", what is "JAVA" coded?',
        options: ['KBEA', 'KBEF', 'KBEG', 'KBEI'],
        correctAnswer: 'KBEF',
    },
    {
        question: 'If "SIX" is coded as "UZI", then how is "FIVE" coded?',
        options: ['KIZI', 'KJZI', 'KJAI', 'KJFI'],
        correctAnswer: 'KJZI',
    },
    {
        question: 'In a certain language, "DOCTOR" is coded as "EQDUQW". What is "NURSE" coded?',
        options: ['OPVUF', 'OPVUG', 'OQVUF', 'OQVUG'],
        correctAnswer: 'OPVUF',
    },
    {
        question: 'If "GOLD" is coded as "HPME", how is "SILVER" coded?',
        options: ['TJMWF', 'TJNWG', 'UJMYF', 'UJMYG'],
        correctAnswer: 'TJMWF',
    },
    {
        question: 'In a specific code, if "HAPPY" is written as "QDDCO", how is "SAD" coded?',
        options: ['TGD', 'TGC', 'TGQ', 'THD'],
        correctAnswer: 'TGD',
    },
    {
        question: 'If "EYE" is coded as "FZF", what is the code for "SEE"?',
        options: ['TFF', 'TGG', 'TDE', 'TCE'],
        correctAnswer: 'TFF',
    },
    {
        question: 'In a certain code, if "FISH" is written as "GJTI", what is "BIRD" in that code?',
        options: ['CJSF', 'CJSI', 'DJSF', 'EJSH'],
        correctAnswer: 'CJSF',
    },
],

        'Matching Definitions': [
    {
        question: 'Match the term to its correct definition: "Photosynthesis"',
        options: ['Process by which plants make food using sunlight', 'Process of converting light energy into chemical energy', 'The process of breathing in and out', 'The method of storing energy in plants'],
        correctAnswer: 'Process by which plants make food using sunlight',
    },
    {
        question: 'Match the term to its correct definition: "Osmosis"',
        options: ['Movement of water across a semipermeable membrane', 'Absorption of nutrients', 'Diffusion of gases', 'Flow of liquids through a filter'],
        correctAnswer: 'Movement of water across a semipermeable membrane',
    },
    {
        question: 'Match the term to its correct definition: "Ecosystem"',
        options: ['Community of living organisms interacting with their environment', 'A group of the same species living together', 'The physical environment in which an organism lives', 'A network of feeding interactions'],
        correctAnswer: 'Community of living organisms interacting with their environment',
    },
    {
        question: 'Match the term to its correct definition: "DNA"',
        options: ['Molecule that carries genetic information', 'Structure that synthesizes proteins', 'Energy currency of the cell', 'Membrane-bound organelle'],
        correctAnswer: 'Molecule that carries genetic information',
    },
    {
        question: 'Match the term to its correct definition: "Kinetic Energy"',
        options: ['Energy of motion', 'Stored energy', 'Energy due to position', 'Energy that is released'],
        correctAnswer: 'Energy of motion',
    },
    {
        question: 'Match the term to its correct definition: "Gravity"',
        options: ['Force that attracts objects toward each other', 'Energy stored in an object', 'Resistance to motion', 'Change in position'],
        correctAnswer: 'Force that attracts objects toward each other',
    },
    {
        question: 'Match the term to its correct definition: "Acid"',
        options: ['Substance that donates protons', 'Substance that accepts protons', 'Neutral substance', 'A base that can accept hydrogen ions'],
        correctAnswer: 'Substance that donates protons',
    },
    {
        question: 'Match the term to its correct definition: "Mitosis"',
        options: ['Process of cell division resulting in two identical cells', 'Process of cell differentiation', 'Process of genetic recombination', 'Type of cell death'],
        correctAnswer: 'Process of cell division resulting in two identical cells',
    },
    {
        question: 'Match the term to its correct definition: "Homeostasis"',
        options: ['Maintaining a stable internal environment', 'The ability to reproduce', 'Growth of an organism', 'Response to stimuli'],
        correctAnswer: 'Maintaining a stable internal environment',
    },
    {
        question: 'Match the term to its correct definition: "Neuron"',
        options: ['Nerve cell that transmits signals', 'Cell responsible for immune response', 'Cell that produces hormones', 'Cell that transports oxygen'],
        correctAnswer: 'Nerve cell that transmits signals',
    },
    {
        question: 'Match the term to its correct definition: "Alloy"',
        options: ['A mixture of two or more metals', 'Pure metal', 'A type of gas', 'An organic compound'],
        correctAnswer: 'A mixture of two or more metals',
    },
    {
        question: 'Match the term to its correct definition: "Conductor"',
        options: ['Material that allows the flow of electricity', 'Material that resists the flow of electricity', 'Material that reflects light', 'Material that absorbs heat'],
        correctAnswer: 'Material that allows the flow of electricity',
    },
    {
        question: 'Match the term to its correct definition: "Photosynthesis"',
        options: ['The process of using sunlight to synthesize food', 'The breakdown of glucose for energy', 'A form of respiration', 'The production of oxygen by plants'],
        correctAnswer: 'The process of using sunlight to synthesize food',
    },
    {
        question: 'Match the term to its correct definition: "Biodegradable"',
        options: ['Capable of being decomposed by bacteria or other living organisms', 'Incapable of being broken down', 'Synthetic material', 'Chemical resistant material'],
        correctAnswer: 'Capable of being decomposed by bacteria or other living organisms',
    },
    {
        question: 'Match the term to its correct definition: "Symbiosis"',
        options: ['Interaction between two different organisms living in close physical proximity', 'Competition between species', 'The movement of species from one habitat to another', 'The process of evolution'],
        correctAnswer: 'Interaction between two different organisms living in close physical proximity',
    },
    {
        question: 'Match the term to its correct definition: "Sustainable Development"',
        options: ['Development that meets the needs of the present without compromising the future', 'Development focused solely on economic growth', 'Development that ignores environmental concerns', 'Development that leads to depletion of resources'],
        correctAnswer: 'Development that meets the needs of the present without compromising the future',
    },
    {
        question: 'Match the term to its correct definition: "Photosynthesis"',
        options: ['Conversion of light energy into chemical energy', 'Conversion of chemical energy into heat', 'Conversion of solar energy into wind energy', 'Conversion of sound energy into light'],
        correctAnswer: 'Conversion of light energy into chemical energy',
    },
    {
        question: 'Match the term to its correct definition: "Inflation"',
        options: ['Increase in prices of goods and services', 'Decrease in the value of currency', 'Stabilization of prices', 'Reduction of government spending'],
        correctAnswer: 'Increase in prices of goods and services',
    },
],

       'Making Judgments': [
    {
        question: 'Based on the data, is the new marketing strategy effective?',
        options: ['Yes', 'No', 'Insufficient data', 'Only in some markets'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Is it likely that sales will increase if the price is lowered?',
        options: ['Definitely', 'Unlikely', 'Maybe', 'Not enough information'],
        correctAnswer: 'Definitely',
    },
    {
        question: 'From the survey results, can we conclude that customer satisfaction is improving?',
        options: ['Yes', 'No', 'Cannot determine', 'Only for certain products'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Given the rise in online shopping, should the company focus on e-commerce?',
        options: ['Yes', 'No', 'Only if profits increase', 'Not enough evidence'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Based on previous trends, is it reasonable to expect higher sales in the upcoming quarter?',
        options: ['Yes', 'No', 'Only if new products are released', 'Uncertain'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Considering the feedback, is it a good idea to launch the new product line?',
        options: ['Yes', 'No', 'Only after further testing', 'Depends on market conditions'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Based on last year’s performance, should we expand our operations?',
        options: ['Yes', 'No', 'Only in specific regions', 'Depends on funding'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Is the current investment strategy yielding satisfactory results?',
        options: ['Yes', 'No', 'Needs more time', 'Only for certain assets'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Given the current economic climate, should we reduce expenses?',
        options: ['Yes', 'No', 'Only on non-essential items', 'Requires further analysis'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Can we assume that employee morale is high based on the recent survey?',
        options: ['Yes', 'No', 'Not necessarily', 'Only in some departments'],
        correctAnswer: 'No',
    },
    {
        question: 'Is it reasonable to conclude that our advertising is effective?',
        options: ['Yes', 'No', 'More data needed', 'Effective only for some products'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Based on recent data, should we hire more staff?',
        options: ['Yes', 'No', 'Only temporary staff', 'Depends on workload'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Given the rise in competition, should we lower our prices?',
        options: ['Yes', 'No', 'Only for specific products', 'Wait and see'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Is it safe to say that our brand is well-known in the market?',
        options: ['Yes', 'No', 'Only in certain demographics', 'Depends on the region'],
        correctAnswer: 'Yes',
    },
    {
        question: 'From the financial report, can we conclude that we are profitable?',
        options: ['Yes', 'No', 'Only for this quarter', 'Need to analyze further'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Based on the trends, should we invest in new technology?',
        options: ['Yes', 'No', 'Only after a cost-benefit analysis', 'Requires further discussion'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Is it likely that our customer base will grow in the next year?',
        options: ['Yes', 'No', 'Only if we improve service', 'Difficult to predict'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Given the evidence, can we determine that social media has a positive impact on sales?',
        options: ['Yes', 'No', 'Not enough data', 'Only for younger demographics'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Based on current employee turnover rates, is it an issue we need to address?',
        options: ['Yes', 'No', 'Only in specific departments', 'Needs more investigation'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Can we confidently say that customer loyalty is increasing?',
        options: ['Yes', 'No', 'Only for returning customers', 'More analysis needed'],
        correctAnswer: 'Yes',
    },
],

        'Verbal Reasoning': [
    {
        question: 'If "cat" is to "kitten," then "dog" is to:',
        options: ['puppy', 'hound', 'wolf', 'fox'],
        correctAnswer: 'puppy',
    },
    {
        question: 'Which word is most similar to "happy"?',
        options: ['joyful', 'sad', 'angry', 'upset'],
        correctAnswer: 'joyful',
    },
    {
        question: 'If "start" is to "begin," then "end" is to:',
        options: ['finish', 'continue', 'halt', 'pause'],
        correctAnswer: 'finish',
    },
    {
        question: 'What is the opposite of "bitter"?',
        options: ['sweet', 'sour', 'salty', 'spicy'],
        correctAnswer: 'sweet',
    },
    {
        question: 'If "hot" is to "cold," then "high" is to:',
        options: ['low', 'tall', 'deep', 'shallow'],
        correctAnswer: 'low',
    },
    {
        question: 'Which word is most similar to "sincere"?',
        options: ['honest', 'deceptive', 'fake', 'false'],
        correctAnswer: 'honest',
    },
    {
        question: 'If "light" is to "dark," then "day" is to:',
        options: ['night', 'morning', 'evening', 'dusk'],
        correctAnswer: 'night',
    },
    {
        question: 'Which word is most opposite to "brave"?',
        options: ['fearful', 'courageous', 'bold', 'intrepid'],
        correctAnswer: 'fearful',
    },
    {
        question: 'If "big" is to "small," then "fast" is to:',
        options: ['slow', 'quick', 'rapid', 'swift'],
        correctAnswer: 'slow',
    },
    {
        question: 'What is the meaning of "diligent"?',
        options: ['lazy', 'hardworking', 'careless', 'hasty'],
        correctAnswer: 'hardworking',
    },
    {
        question: 'If "rich" is to "wealthy," then "poor" is to:',
        options: ['broke', 'destitute', 'impoverished', 'needy'],
        correctAnswer: 'impoverished',
    },
    {
        question: 'Which word is most similar to "beautiful"?',
        options: ['pretty', 'ugly', 'plain', 'ordinary'],
        correctAnswer: 'pretty',
    },
    {
        question: 'If "truth" is to "lie," then "fact" is to:',
        options: ['fiction', 'reality', 'assertion', 'claim'],
        correctAnswer: 'fiction',
    },
    {
        question: 'What is the opposite of "success"?',
        options: ['failure', 'achievement', 'victory', 'triumph'],
        correctAnswer: 'failure',
    },
    {
        question: 'If "happy" is to "sad," then "excited" is to:',
        options: ['bored', 'enthusiastic', 'content', 'calm'],
        correctAnswer: 'bored',
    },
    {
        question: 'Which word is most similar to "difficult"?',
        options: ['easy', 'challenging', 'simple', 'straightforward'],
        correctAnswer: 'challenging',
    },
    {
        question: 'If "young" is to "old," then "new" is to:',
        options: ['used', 'ancient', 'modern', 'vintage'],
        correctAnswer: 'used',
    },
    {
        question: 'What is the meaning of "optimistic"?',
        options: ['pessimistic', 'hopeful', 'doubtful', 'cynical'],
        correctAnswer: 'hopeful',
    },
    {
        question: 'If "simple" is to "complex," then "easy" is to:',
        options: ['difficult', 'challenging', 'simple', 'straightforward'],
        correctAnswer: 'difficult',
    },
    {
        question: 'Which word is most opposite to "generous"?',
        options: ['stingy', 'kind', 'charitable', 'giving'],
        correctAnswer: 'stingy',
    },
],

       'Logical Problems': [
    {
        question: 'A farmer has 17 sheep, and all but 9 die. How many are left?',
        options: ['8', '9', '10', '17'],
        correctAnswer: '9',
    },
    {
        question: 'If two’s company and three’s a crowd, what are four and five?',
        options: ['Nine', 'A party', 'A gathering', 'None of the above'],
        correctAnswer: 'A party',
    },
    {
        question: 'In a certain code, if "COLD" is coded as "DPME," how is "WARM" coded?',
        options: ['XBSN', 'XBSO', 'YBSN', 'YBQM'],
        correctAnswer: 'XBSN',
    },
    {
        question: 'If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies. True or False?',
        options: ['True', 'False', 'Cannot be determined', 'None of the above'],
        correctAnswer: 'True',
    },
    {
        question: 'A clock shows the time as 3:15. What is the angle between the hour and the minute hand?',
        options: ['52.5 degrees', '75 degrees', '90 degrees', '105 degrees'],
        correctAnswer: '52.5 degrees',
    },
    {
        question: 'If a circle has a radius of 7 cm, what is its circumference?',
        options: ['14π cm', '21π cm', '28π cm', '49π cm'],
        correctAnswer: '14π cm',
    },
    {
        question: 'In a family of six members P, Q, R, S, T, and U, there are two married couples. S is a doctor, and T is a teacher. P is the father of R, and R is the brother of Q. How is Q related to S?',
        options: ['Daughter', 'Son', 'Niece', 'Cannot be determined'],
        correctAnswer: 'Daughter',
    },
    {
        question: 'What comes next in the sequence: 2, 4, 8, 16, ...?',
        options: ['32', '24', '36', '40'],
        correctAnswer: '32',
    },
    {
        question: 'If “A” is taller than “B,” and “B” is taller than “C,” who is the shortest?',
        options: ['A', 'B', 'C', 'Cannot be determined'],
        correctAnswer: 'C',
    },
    {
        question: 'If you rearrange the letters "CIFAIPC," you would have the name of a:',
        options: ['City', 'Animal', 'Ocean', 'Country'],
        correctAnswer: 'City',
    },
    {
        question: 'How many times can you subtract 10 from 100?',
        options: ['1', '10', '9', '100'],
        correctAnswer: '1',
    },
    {
        question: 'If a triangle has sides of lengths 3, 4, and 5, what is its area?',
        options: ['6', '12', '15', '18'],
        correctAnswer: '6',
    },
    {
        question: 'Which of the following numbers is odd?',
        options: ['2', '4', '6', '9'],
        correctAnswer: '9',
    },
    {
        question: 'If all squares are rectangles, and all rectangles are quadrilaterals, then:',
        options: ['All quadrilaterals are squares', 'All squares are quadrilaterals', 'All rectangles are squares', 'None of the above'],
        correctAnswer: 'All squares are quadrilaterals',
    },
    {
        question: 'What is the next number in the series: 5, 10, 15, 20, ...?',
        options: ['23', '25', '30', '35'],
        correctAnswer: '25',
    },
    {
        question: 'If today is Monday, what day will it be in 100 days?',
        options: ['Tuesday', 'Wednesday', 'Saturday', 'Monday'],
        correctAnswer: 'Monday',
    },
    {
        question: 'A is twice as old as B. If B is 10 years old, how old is A?',
        options: ['15', '20', '25', '30'],
        correctAnswer: '20',
    },
    {
        question: 'If a train travels 60 miles in 1 hour, how far will it travel in 3 hours?',
        options: ['120 miles', '150 miles', '180 miles', '200 miles'],
        correctAnswer: '180 miles',
    },
    {
        question: 'If you have a basket with 5 apples and you take away 3, how many do you have?',
        options: ['2', '3', '5', 'None of the above'],
        correctAnswer: '3',
    },
    {
        question: 'If "A" is the father of "B" and "C" is the mother of "B," what is the relationship of "C" to "A"?',
        options: ['Sister', 'Wife', 'Daughter', 'Friend'],
        correctAnswer: 'Wife',
    },
],

        'Logical Games': [
    {
        question: 'In a game, if you roll a die and get a number greater than 4, you win. What is the probability of winning?',
        options: ['1/6', '1/3', '1/2', '2/3'],
        correctAnswer: '1/3',
    },
    {
        question: 'You have 3 red balls, 2 blue balls, and 1 green ball. If you randomly select one ball, what is the probability that it is blue?',
        options: ['1/6', '1/3', '1/2', '1/5'],
        correctAnswer: '1/3',
    },
    {
        question: 'In a card game, there are 52 cards. If you draw one card, what is the probability that it is a spade?',
        options: ['1/4', '1/13', '1/2', '1/26'],
        correctAnswer: '1/4',
    },
    {
        question: 'In a puzzle, if 4 people can complete a task in 6 days, how many days will it take for 8 people to complete the same task?',
        options: ['2 days', '3 days', '4 days', '5 days'],
        correctAnswer: '3 days',
    },
    {
        question: 'If a game consists of two players and one player wins 60% of the time, what is the probability that the other player wins?',
        options: ['20%', '30%', '40%', '50%'],
        correctAnswer: '40%',
    },
    {
        question: 'In a race, if there are 5 participants, how many different ways can the first three positions be filled?',
        options: ['60', '120', '20', '30'],
        correctAnswer: '60',
    },
    {
        question: 'If a game requires you to roll a sum of 8 with two dice, how many combinations can achieve this?',
        options: ['5', '6', '7', '8'],
        correctAnswer: '5',
    },
    {
        question: 'In a guessing game, you have 4 options to choose from. If one is correct, what is the probability of guessing correctly?',
        options: ['1/4', '1/3', '1/2', '1/5'],
        correctAnswer: '1/4',
    },
    {
        question: 'If you have a 20% chance of winning a game and play 5 times, what is the probability that you win at least once?',
        options: ['20%', '64%', '80%', '100%'],
        correctAnswer: '64%',
    },
    {
        question: 'In a logic game, you must solve a riddle to proceed. If it takes you 10 minutes to solve each riddle, how long will it take to solve 5 riddles?',
        options: ['30 minutes', '40 minutes', '50 minutes', '60 minutes'],
        correctAnswer: '50 minutes',
    },
    {
        question: 'If you have a box containing 10 red and 5 green balls, what is the probability of drawing a red ball?',
        options: ['1/3', '2/3', '1/2', '5/6'],
        correctAnswer: '2/3',
    },
    {
        question: 'In a board game, you need to land on a space with a value of 10. If you roll two dice, what is the probability of achieving this?',
        options: ['1/6', '1/12', '1/18', '1/36'],
        correctAnswer: '1/12',
    },
    {
        question: 'In a card game, if you have 4 aces out of 52 cards, what is the probability of drawing an ace?',
        options: ['1/52', '1/13', '4/52', '1/4'],
        correctAnswer: '1/13',
    },
    {
        question: 'You are playing a game where you must flip a coin 3 times. What is the total number of possible outcomes?',
        options: ['4', '6', '8', '8'],
        correctAnswer: '8',
    },
    {
        question: 'If a game consists of 4 rounds and you can win or lose each round, how many total outcomes are possible?',
        options: ['8', '12', '16', '20'],
        correctAnswer: '16',
    },
    {
        question: 'In a puzzle, if you need to arrange the letters of the word "LOGIC," how many different arrangements can you create?',
        options: ['60', '120', '180', '240'],
        correctAnswer: '120',
    },
    {
        question: 'You need to select 2 fruits from a basket containing 5 apples and 3 oranges. How many different selections are possible?',
        options: ['10', '15', '20', '25'],
        correctAnswer: '10',
    },
    {
        question: 'If you have to make a choice between 3 different types of ice cream, how many different single scoops can you choose?',
        options: ['3', '6', '9', '12'],
        correctAnswer: '3',
    },
    {
        question: 'In a treasure hunt game, if there are 8 clues to follow, how many different sequences can the clues be followed in?',
        options: ['40', '80', '160', '320'],
        correctAnswer: '40320',
    },
    {
        question: 'In a guessing game, if there are 5 doors to choose from and only one is correct, what is the probability of choosing the right door?',
        options: ['1/5', '1/4', '1/3', '1/2'],
        correctAnswer: '1/5',
    },
],

        
      },
    },
    {
      name: 'Verbal Reasoning',
      description: 'Data and graph-based problem-solving.',
      folders: {
        'Logical Sequence of Words': [
    {
        question: 'Arrange the words to form a logical sequence: "frozen", "thaw", "ice", "water".',
        options: ['ice, frozen, thaw, water', 'frozen, water, ice, thaw', 'water, thaw, ice, frozen', 'thaw, water, ice, frozen'],
        correctAnswer: 'ice, frozen, thaw, water',
    },
    {
        question: 'Arrange the words to form a logical sequence: "doctor", "examine", "patient", "diagnose".',
        options: ['doctor, examine, diagnose, patient', 'patient, doctor, examine, diagnose', 'doctor, patient, diagnose, examine', 'examine, patient, doctor, diagnose'],
        correctAnswer: 'doctor, examine, diagnose, patient',
    },
    {
        question: 'Arrange the words to form a logical sequence: "egg", "chick", "hen", "hatch".',
        options: ['hen, egg, hatch, chick', 'egg, hatch, chick, hen', 'hen, hatch, chick, egg', 'egg, chick, hatch, hen'],
        correctAnswer: 'egg, hatch, chick, hen',
    },
    {
        question: 'Arrange the words to form a logical sequence: "sow", "seed", "grow", "harvest".',
        options: ['sow, grow, seed, harvest', 'seed, sow, grow, harvest', 'sow, seed, grow, harvest', 'grow, harvest, seed, sow'],
        correctAnswer: 'sow, seed, grow, harvest',
    },
    {
        question: 'Arrange the words to form a logical sequence: "rain", "cloud", "storm", "thunder".',
        options: ['cloud, rain, thunder, storm', 'rain, cloud, storm, thunder', 'storm, rain, thunder, cloud', 'thunder, storm, cloud, rain'],
        correctAnswer: 'cloud, rain, storm, thunder',
    },
    {
        question: 'Arrange the words to form a logical sequence: "fire", "burn", "ash", "smoke".',
        options: ['fire, burn, smoke, ash', 'burn, fire, ash, smoke', 'fire, ash, burn, smoke', 'burn, smoke, fire, ash'],
        correctAnswer: 'fire, burn, smoke, ash',
    },
    {
        question: 'Arrange the words to form a logical sequence: "lecture", "study", "exam", "pass".',
        options: ['lecture, exam, pass, study', 'study, lecture, exam, pass', 'lecture, study, pass, exam', 'study, exam, lecture, pass'],
        correctAnswer: 'lecture, study, exam, pass',
    },
    {
        question: 'Arrange the words to form a logical sequence: "birth", "growth", "maturity", "death".',
        options: ['growth, maturity, birth, death', 'birth, growth, maturity, death', 'maturity, birth, growth, death', 'death, growth, maturity, birth'],
        correctAnswer: 'birth, growth, maturity, death',
    },
    {
        question: 'Arrange the words to form a logical sequence: "prepare", "cook", "serve", "eat".',
        options: ['prepare, cook, eat, serve', 'cook, serve, prepare, eat', 'prepare, serve, cook, eat', 'cook, eat, prepare, serve'],
        correctAnswer: 'prepare, cook, serve, eat',
    },
    {
        question: 'Arrange the words to form a logical sequence: "research", "write", "publish", "edit".',
        options: ['write, edit, publish, research', 'research, write, edit, publish', 'publish, edit, write, research', 'research, edit, write, publish'],
        correctAnswer: 'research, write, edit, publish',
    },
    {
        question: 'Arrange the words to form a logical sequence: "plan", "execute", "evaluate", "review".',
        options: ['plan, execute, review, evaluate', 'evaluate, review, plan, execute', 'plan, execute, evaluate, review', 'execute, evaluate, review, plan'],
        correctAnswer: 'plan, execute, evaluate, review',
    },
    {
        question: 'Arrange the words to form a logical sequence: "discover", "invent", "create", "implement".',
        options: ['invent, create, discover, implement', 'discover, invent, create, implement', 'create, discover, invent, implement', 'implement, create, discover, invent'],
        correctAnswer: 'discover, invent, create, implement',
    },
    {
        question: 'Arrange the words to form a logical sequence: "observe", "analyze", "conclude", "report".',
        options: ['observe, analyze, report, conclude', 'observe, analyze, conclude, report', 'analyze, conclude, observe, report', 'report, observe, analyze, conclude'],
        correctAnswer: 'observe, analyze, conclude, report',
    },
    {
        question: 'Arrange the words to form a logical sequence: "wake", "breakfast", "work", "sleep".',
        options: ['wake, breakfast, work, sleep', 'breakfast, wake, sleep, work', 'work, sleep, wake, breakfast', 'sleep, wake, breakfast, work'],
        correctAnswer: 'wake, breakfast, work, sleep',
    },
    {
        question: 'Arrange the words to form a logical sequence: "find", "solve", "learn", "apply".',
        options: ['solve, find, apply, learn', 'find, solve, learn, apply', 'learn, apply, find, solve', 'apply, solve, learn, find'],
        correctAnswer: 'find, solve, learn, apply',
    },
    {
        question: 'Arrange the words to form a logical sequence: "create", "design", "develop", "test".',
        options: ['create, design, develop, test', 'design, develop, test, create', 'develop, test, create, design', 'test, create, design, develop'],
        correctAnswer: 'create, design, develop, test',
    },
    {
        question: 'Arrange the words to form a logical sequence: "learn", "practice", "master", "teach".',
        options: ['learn, practice, master, teach', 'practice, teach, learn, master', 'master, learn, practice, teach', 'teach, practice, learn, master'],
        correctAnswer: 'learn, practice, master, teach',
    },
    {
        question: 'Arrange the words to form a logical sequence: "watch", "enjoy", "discuss", "review".',
        options: ['watch, enjoy, discuss, review', 'enjoy, discuss, watch, review', 'discuss, review, watch, enjoy', 'review, enjoy, watch, discuss'],
        correctAnswer: 'watch, enjoy, discuss, review',
    },
],

        'Blood Relation Test': [
    {
        question: 'A is the father of B. C is the mother of B. What is the relationship between A and C?',
        options: ['Husband', 'Brother', 'Son', 'Father'],
        correctAnswer: 'Husband',
    },
    {
        question: 'If X is the brother of Y, and Y is the sister of Z, what is Z to X?',
        options: ['Brother', 'Sister', 'Sibling', 'Cousin'],
        correctAnswer: 'Sister',
    },
    {
        question: 'A is the son of B. B is the father of C. What is the relationship between A and C?',
        options: ['Uncle', 'Brother', 'Cousin', 'Nephew'],
        correctAnswer: 'Brother',
    },
    {
        question: 'If P is the daughter of Q, and Q is the sister of R, what is P to R?',
        options: ['Niece', 'Daughter', 'Cousin', 'Sister'],
        correctAnswer: 'Niece',
    },
    {
        question: 'If J is the mother of K and K is the father of L, how is J related to L?',
        options: ['Grandmother', 'Aunt', 'Mother', 'Sister'],
        correctAnswer: 'Grandmother',
    },
    {
        question: 'A is married to B, and they have two children, C and D. What is A to C?',
        options: ['Father', 'Mother', 'Sibling', 'Cousin'],
        correctAnswer: 'Father',
    },
    {
        question: 'If M is the sister of N and N is the brother of O, what is O to M?',
        options: ['Sister', 'Brother', 'Sibling', 'Cousin'],
        correctAnswer: 'Brother',
    },
    {
        question: 'If T is the father of U, and U is the daughter of V, what is T to V?',
        options: ['Son', 'Husband', 'Brother', 'Cousin'],
        correctAnswer: 'Husband',
    },
    {
        question: 'If E is the brother of F and F is the sister of G, what is G to E?',
        options: ['Brother', 'Sister', 'Sibling', 'Cousin'],
        correctAnswer: 'Sister',
    },
    {
        question: 'A has two children, B and C. C is married to D. What is D to A?',
        options: ['Son-in-law', 'Daughter-in-law', 'Brother-in-law', 'Cousin'],
        correctAnswer: 'Son-in-law',
    },
    {
        question: 'If X is the grandfather of Y, and Y is the mother of Z, what is X to Z?',
        options: ['Grandfather', 'Great-Grandfather', 'Uncle', 'Cousin'],
        correctAnswer: 'Grandfather',
    },
    {
        question: 'If P is the son of Q and Q is the daughter of R, what is R to P?',
        options: ['Grandmother', 'Mother', 'Sister', 'Aunt'],
        correctAnswer: 'Grandmother',
    },
    {
        question: 'If S is the aunt of T and T is the niece of U, what is S to U?',
        options: ['Sister', 'Sister-in-law', 'Mother', 'Cousin'],
        correctAnswer: 'Sister-in-law',
    },
    {
        question: 'If A is the uncle of B and C is the sister of B, how is A related to C?',
        options: ['Uncle', 'Brother', 'Father', 'Cousin'],
        correctAnswer: 'Uncle',
    },
    {
        question: 'If D is the son of E and E is the brother of F, what is D to F?',
        options: ['Niece', 'Nephew', 'Cousin', 'Brother'],
        correctAnswer: 'Nephew',
    },
    {
        question: 'If G is the daughter of H and I is the son of H, what is G to I?',
        options: ['Sister', 'Cousin', 'Niece', 'Aunt'],
        correctAnswer: 'Sister',
    },
    {
        question: 'If J is the father of K and L is the mother of K, what is L to J?',
        options: ['Wife', 'Sister', 'Cousin', 'Daughter'],
        correctAnswer: 'Wife',
    },
    {
        question: 'If M is the grandfather of N and N has a sibling O, what is M to O?',
        options: ['Grandfather', 'Uncle', 'Father', 'Cousin'],
        correctAnswer: 'Grandfather',
    },
    {
        question: 'If P is the sister of Q, and R is the brother of Q, how is P related to R?',
        options: ['Sister', 'Cousin', 'Aunt', 'Mother'],
        correctAnswer: 'Sister',
    },
    {
        question: 'If S is married to T, and they have a child U, what is U to S?',
        options: ['Child', 'Sibling', 'Niece', 'Cousin'],
        correctAnswer: 'Child',
    },
],

       'Syllogism': [
    {
        question: 'All cats are animals. All animals are mammals. Therefore, all cats are mammals. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'Yes',
    },
    {
        question: 'Some flowers are roses. All roses are beautiful. Therefore, some flowers are beautiful. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'Yes',
    },
    {
        question: 'No birds are mammals. Some mammals are not dogs. Therefore, no birds are dogs. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'No',
    },
    {
        question: 'All men are mortal. Socrates is a man. Therefore, Socrates is mortal. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'Yes',
    },
    {
        question: 'All pencils are made of wood. Some wood is expensive. Therefore, some pencils are expensive. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'No',
    },
    {
        question: 'Some dogs are friendly. All friendly animals are pets. Therefore, some dogs are pets. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'Yes',
    },
    {
        question: 'All fruits are healthy. Some apples are fruits. Therefore, some apples are healthy. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'Yes',
    },
    {
        question: 'No students are lazy. Some lazy people are poor. Therefore, no students are poor. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'Yes',
    },
    {
        question: 'All cars are vehicles. Some vehicles are fast. Therefore, some cars are fast. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'No',
    },
    {
        question: 'All flowers are plants. Some plants are green. Therefore, some flowers are green. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'Yes',
    },
    {
        question: 'No cats are dogs. Some pets are cats. Therefore, some pets are not dogs. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'Yes',
    },
    {
        question: 'All teachers are educated. Some educated people are doctors. Therefore, some teachers are doctors. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'No',
    },
    {
        question: 'Some birds can fly. All sparrows are birds. Therefore, some sparrows can fly. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'Yes',
    },
    {
        question: 'All squares are rectangles. Some rectangles are not squares. Therefore, some squares are not rectangles. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'No',
    },
    {
        question: 'Some people are tall. All tall people are athletes. Therefore, some people are athletes. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'Yes',
    },
    {
        question: 'No fish are mammals. Some dolphins are fish. Therefore, some dolphins are not mammals. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'No',
    },
    {
        question: 'All dogs bark. Some animals that bark are dogs. Therefore, all barking animals are dogs. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'No',
    },
    {
        question: 'All trees are plants. Some plants are tall. Therefore, some trees are tall. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'Yes',
    },
    {
        question: 'No reptiles are mammals. Some mammals are pets. Therefore, no reptiles are pets. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'Yes',
    },
    {
        question: 'All computers are machines. Some machines are fast. Therefore, some computers are fast. Is this conclusion valid?',
        options: ['Yes', 'No', 'Cannot be determined'],
        correctAnswer: 'No',
    },
],

        'Series Completion': [
    {
        question: 'Find the next number in the series: 2, 4, 8, 16, ?',
        options: ['20', '24', '32', '36'],
        correctAnswer: '32',
    },
    {
        question: 'What comes next in the series: A, B, C, D, ?',
        options: ['E', 'F', 'G', 'H'],
        correctAnswer: 'E',
    },
    {
        question: 'Complete the series: 5, 10, 20, 40, ?',
        options: ['50', '80', '100', '120'],
        correctAnswer: '80',
    },
    {
        question: 'What is the next letter in the series: Z, Y, X, W, ?',
        options: ['V', 'U', 'T', 'S'],
        correctAnswer: 'V',
    },
    {
        question: 'Identify the next number: 3, 6, 9, 12, ?',
        options: ['15', '16', '17', '18'],
        correctAnswer: '15',
    },
    {
        question: 'Find the next term in the series: 1, 1, 2, 3, 5, ?',
        options: ['8', '10', '12', '13'],
        correctAnswer: '8',
    },
    {
        question: 'Complete the sequence: 11, 14, 17, 20, ?',
        options: ['21', '22', '23', '24'],
        correctAnswer: '23',
    },
    {
        question: 'What comes next in the series: 2, 5, 10, 17, ?',
        options: ['24', '25', '26', '27'],
        correctAnswer: '26',
    },
    {
        question: 'Identify the next number: 100, 90, 80, 70, ?',
        options: ['50', '60', '40', '30'],
        correctAnswer: '60',
    },
    {
        question: 'Find the next letter: J, K, L, M, ?',
        options: ['N', 'O', 'P', 'Q'],
        correctAnswer: 'N',
    },
    {
        question: 'Complete the series: 1, 4, 9, 16, ?',
        options: ['20', '21', '22', '25'],
        correctAnswer: '25',
    },
    {
        question: 'What is the next term: 20, 18, 16, 14, ?',
        options: ['12', '10', '8', '6'],
        correctAnswer: '12',
    },
    {
        question: 'Identify the next number: 1, 3, 6, 10, ?',
        options: ['14', '15', '16', '17'],
        correctAnswer: '15',
    },
    {
        question: 'Complete the sequence: 5, 15, 25, 35, ?',
        options: ['40', '45', '50', '55'],
        correctAnswer: '45',
    },
    {
        question: 'What comes next: 2, 3, 5, 7, ?',
        options: ['11', '12', '13', '14'],
        correctAnswer: '11',
    },
    {
        question: 'Find the next number in the series: 1, 2, 4, 8, ?',
        options: ['10', '12', '14', '16'],
        correctAnswer: '16',
    },
    {
        question: 'Identify the next term: 7, 14, 28, 56, ?',
        options: ['84', '90', '112', '128'],
        correctAnswer: '112',
    },
    {
        question: 'Complete the sequence: 4, 9, 16, 25, ?',
        options: ['30', '32', '36', '40'],
        correctAnswer: '36',
    },
    {
        question: 'What is the next term: 3, 6, 12, 24, ?',
        options: ['36', '48', '60', '72'],
        correctAnswer: '48',
    },
    {
        question: 'Identify the next letter: C, D, E, F, ?',
        options: ['G', 'H', 'I', 'J'],
        correctAnswer: 'G',
    },
],

        'Cause and Effect': [
    {
        question: 'If it rains heavily, what is likely to happen?',
        options: ['The ground will be dry.', 'People will stay indoors.', 'The sun will shine.', 'Plants will die.'],
        correctAnswer: 'People will stay indoors.',
    },
    {
        question: 'What is the effect of studying hard?',
        options: ['Poor grades.', 'Better understanding of the subject.', 'More free time.', 'Less sleep.'],
        correctAnswer: 'Better understanding of the subject.',
    },
    {
        question: 'If the temperature drops below freezing, what might happen?',
        options: ['Water will boil.', 'Ice will form on lakes and rivers.', 'Flowers will bloom.', 'Birds will migrate south.'],
        correctAnswer: 'Ice will form on lakes and rivers.',
    },
    {
        question: 'What happens if you do not water a plant?',
        options: ['It grows faster.', 'It wilts and may die.', 'It blooms beautifully.', 'It attracts insects.'],
        correctAnswer: 'It wilts and may die.',
    },
    {
        question: 'If a car runs out of fuel, what is the likely result?',
        options: ['It will keep moving.', 'It will stop running.', 'It will speed up.', 'It will drive smoothly.'],
        correctAnswer: 'It will stop running.',
    },
    {
        question: 'If a person exercises regularly, what is a probable outcome?',
        options: ['Increased fitness and health.', 'Weight gain.', 'Less energy.', 'More fatigue.'],
        correctAnswer: 'Increased fitness and health.',
    },
    {
        question: 'If a student skips classes frequently, what might happen?',
        options: ['They will learn more.', 'They will miss important information.', 'They will make new friends.', 'They will excel in exams.'],
        correctAnswer: 'They will miss important information.',
    },
    {
        question: 'If a factory emits toxic waste, what could be the effect on the environment?',
        options: ['Improved air quality.', 'Harm to wildlife and plants.', 'More tourism.', 'Increased biodiversity.'],
        correctAnswer: 'Harm to wildlife and plants.',
    },
    {
        question: 'What might happen if you don’t wear a seatbelt while driving?',
        options: ['You will be safer.', 'You may be injured in an accident.', 'Your car will drive better.', 'You will save money.'],
        correctAnswer: 'You may be injured in an accident.',
    },
    {
        question: 'If a student studies at night instead of during the day, what is a possible outcome?',
        options: ['Better concentration.', 'Increased sleepiness.', 'More distractions.', 'Higher grades.'],
        correctAnswer: 'Increased sleepiness.',
    },
    {
        question: 'If a person eats too much junk food, what could be the effect?',
        options: ['Weight loss.', 'Improved health.', 'Health problems.', 'Increased energy.'],
        correctAnswer: 'Health problems.',
    },
    {
        question: 'If a town builds more parks, what is likely to happen?',
        options: ['Less community interaction.', 'Increased quality of life.', 'More pollution.', 'Fewer trees.'],
        correctAnswer: 'Increased quality of life.',
    },
    {
        question: 'If you save money regularly, what will be the result?',
        options: ['You will spend more.', 'You will have savings for emergencies.', 'You will have less money.', 'You will feel poorer.'],
        correctAnswer: 'You will have savings for emergencies.',
    },
    {
        question: 'If a company offers bonuses, what is the likely effect on employees?',
        options: ['Decreased motivation.', 'Increased productivity.', 'Higher turnover rates.', 'Less teamwork.'],
        correctAnswer: 'Increased productivity.',
    },
    {
        question: 'If a country increases its investment in education, what might happen?',
        options: ['More educated workforce.', 'Higher unemployment.', 'Lower literacy rates.', 'Increased poverty.'],
        correctAnswer: 'More educated workforce.',
    },
    {
        question: 'What happens when you overwater a plant?',
        options: ['It thrives.', 'It may develop root rot.', 'It grows faster.', 'It flowers more.'],
        correctAnswer: 'It may develop root rot.',
    },
    {
        question: 'If the government raises taxes, what is a possible effect on citizens?',
        options: ['Increased disposable income.', 'Decreased spending power.', 'Higher savings rates.', 'More investments.'],
        correctAnswer: 'Decreased spending power.',
    },
    {
        question: 'If people recycle more, what could be the outcome?',
        options: ['Increased waste.', 'Less pollution.', 'Higher landfill costs.', 'Decreased resources.'],
        correctAnswer: 'Less pollution.',
    },
    {
        question: 'What might happen if you ignore a car’s warning light?',
        options: ['It will fix itself.', 'You may face bigger problems later.', 'You will save money.', 'Your car will run better.'],
        correctAnswer: 'You may face bigger problems later.',
    },
    {
        question: 'If you regularly read books, what is likely to happen?',
        options: ['Your vocabulary will improve.', 'You will have less knowledge.', 'You will become bored.', 'You will be less creative.'],
        correctAnswer: 'Your vocabulary will improve.',
    },
],

       'Dice': [
    {
        question: 'What is the probability of rolling a sum of 7 with two dice?',
        options: ['1/6', '1/12', '1/36', '1/3'],
        correctAnswer: '1/6',
    },
    {
        question: 'If you roll two dice, what is the total number of possible outcomes?',
        options: ['12', '36', '24', '48'],
        correctAnswer: '36',
    },
    {
        question: 'What is the probability of rolling a double (same number on both dice)?',
        options: ['1/6', '1/12', '1/36', '1/3'],
        correctAnswer: '1/6',
    },
    {
        question: 'What is the probability of rolling an even number with one die?',
        options: ['1/3', '1/2', '2/3', '1/6'],
        correctAnswer: '1/2',
    },
    {
        question: 'If you roll a die, what is the probability of rolling a number greater than 4?',
        options: ['1/6', '1/3', '1/2', '1/4'],
        correctAnswer: '1/3',
    },
    {
        question: 'How many ways can you roll a total of 4 with two dice?',
        options: ['3', '4', '5', '2'],
        correctAnswer: '3',
    },
    {
        question: 'If two dice are rolled, what is the probability of getting a total of 9?',
        options: ['1/12', '1/9', '1/6', '1/18'],
        correctAnswer: '1/12',
    },
    {
        question: 'What is the probability of rolling a number less than 3 on a single die?',
        options: ['1/6', '1/3', '1/2', '1/4'],
        correctAnswer: '1/3',
    },
    {
        question: 'If you roll two dice, what is the probability of getting a sum of 2?',
        options: ['1/36', '1/6', '1/12', '1/18'],
        correctAnswer: '1/36',
    },
    {
        question: 'How many different outcomes are there when rolling three dice?',
        options: ['216', '108', '64', '27'],
        correctAnswer: '216',
    },
    {
        question: 'What is the probability of rolling a total of 10 with two dice?',
        options: ['1/12', '1/9', '1/36', '1/18'],
        correctAnswer: '1/12',
    },
    {
        question: 'If a die is rolled, what is the probability of not rolling a 1?',
        options: ['1/6', '5/6', '1/3', '1/2'],
        correctAnswer: '5/6',
    },
    {
        question: 'What is the probability of rolling a number between 2 and 5 on a single die?',
        options: ['1/2', '1/3', '1/4', '1/5'],
        correctAnswer: '1/2',
    },
    {
        question: 'How many total outcomes are there when rolling two dice?',
        options: ['12', '24', '36', '48'],
        correctAnswer: '36',
    },
    {
        question: 'What is the probability of rolling at least one 6 when rolling two dice?',
        options: ['5/6', '11/36', '1/6', '1/3'],
        correctAnswer: '11/36',
    },
    {
        question: 'How many combinations of two dice will result in a sum of 5?',
        options: ['2', '3', '4', '5'],
        correctAnswer: '4',
    },
    {
        question: 'If you roll a die three times, what is the probability of rolling a 3 at least once?',
        options: ['91/216', '1/6', '5/6', '1/36'],
        correctAnswer: '91/216',
    },
    {
        question: 'What is the chance of rolling two even numbers when rolling two dice?',
        options: ['1/4', '1/3', '1/2', '1/6'],
        correctAnswer: '1/4',
    },
    {
        question: 'What is the probability of rolling the same number on both dice?',
        options: ['1/6', '1/12', '1/18', '1/36'],
        correctAnswer: '1/6',
    },
    {
        question: 'What is the probability of rolling a sum that is greater than 8 with two dice?',
        options: ['5/12', '7/12', '1/2', '1/3'],
        correctAnswer: '5/12',
    },
],

       'Venn Diagrams': [
    {
        question: 'In a class of 30 students, 18 like Mathematics, 12 like Science, and 8 like both subjects. How many students like only Mathematics?',
        options: ['10', '8', '18', '12'],
        correctAnswer: '10',
    },
    {
        question: 'In a survey, 40 people like Tea, 50 like Coffee, and 30 like both. How many people like only Coffee?',
        options: ['20', '30', '10', '50'],
        correctAnswer: '20',
    },
    {
        question: 'In a group of 50 people, 20 like apples, 25 like bananas, and 10 like both. How many like either apples or bananas?',
        options: ['35', '25', '20', '15'],
        correctAnswer: '35',
    },
    {
        question: 'If 70 students like Cricket, 50 like Football, and 30 like both, how many students like only Cricket?',
        options: ['40', '30', '20', '10'],
        correctAnswer: '40',
    },
    {
        question: 'In a survey, 15 people read Magazine A, 10 read Magazine B, and 5 read both. How many read only Magazine A?',
        options: ['10', '5', '15', '0'],
        correctAnswer: '10',
    },
    {
        question: 'A survey shows that 30% of people like Cats, 25% like Dogs, and 10% like both. What percentage like only Cats?',
        options: ['20%', '25%', '15%', '10%'],
        correctAnswer: '20%',
    },
    {
        question: 'In a Venn Diagram representing students who study Math and Science, if 12 study both and 18 study only Math, how many study only Science if 30 study Science?',
        options: ['10', '12', '8', '6'],
        correctAnswer: '10',
    },
    {
        question: 'In a class, 12 students like both History and Geography. If 8 like only History and 6 like only Geography, how many students are there in total?',
        options: ['26', '30', '20', '24'],
        correctAnswer: '26',
    },
    {
        question: 'In a survey of 100 people, 60 like dogs, 40 like cats, and 20 like both. How many like either dogs or cats?',
        options: ['80', '60', '100', '40'],
        correctAnswer: '80',
    },
    {
        question: 'If 50 students like Chocolate, 30 like Vanilla, and 10 like both, how many like only Vanilla?',
        options: ['30', '20', '10', '40'],
        correctAnswer: '20',
    },
    {
        question: 'In a group of 80 people, 35 like Action movies, 30 like Comedy, and 15 like both. How many like only Action movies?',
        options: ['20', '15', '30', '25'],
        correctAnswer: '20',
    },
    {
        question: 'If 60% of students like Science, 40% like Math, and 10% like both, what percentage like only Science?',
        options: ['50%', '40%', '60%', '30%'],
        correctAnswer: '50%',
    },
    {
        question: 'In a survey of 200 people, 70 like Football, 60 like Basketball, and 30 like both. How many like neither sport?',
        options: ['100', '70', '60', '30'],
        correctAnswer: '100',
    },
    {
        question: 'In a Venn Diagram, if A has 15 elements, B has 20, and they intersect with 5, what is the total number of elements in A or B?',
        options: ['30', '25', '35', '20'],
        correctAnswer: '30',
    },
    {
        question: 'In a Venn Diagram with two circles, if Circle A has 12 elements, Circle B has 15, and they share 4, how many elements are in only Circle A?',
        options: ['8', '12', '4', '10'],
        correctAnswer: '8',
    },
    {
        question: 'If 100 people are surveyed about their favorite fruits, and 40 like Apples, 30 like Oranges, and 20 like both, how many like only Apples?',
        options: ['20', '40', '30', '10'],
        correctAnswer: '20',
    },
    {
        question: 'In a group of students, if 25 like Math, 20 like Science, and 10 like both, how many like only Science?',
        options: ['10', '5', '15', '20'],
        correctAnswer: '10',
    },
    {
        question: 'In a survey, 80 people are asked about their favorite colors. If 30 like Blue, 40 like Red, and 10 like both, how many like either Blue or Red?',
        options: ['60', '70', '80', '50'],
        correctAnswer: '60',
    },
    {
        question: 'If in a class of 50 students, 20 like Basketball, 15 like Football, and 5 like both, how many like neither sport?',
        options: ['25', '20', '15', '10'],
        correctAnswer: '25',
    },
    {
        question: 'In a survey of 150 people, 60 like Pizza, 40 like Pasta, and 20 like both. How many like only Pizza?',
        options: ['40', '20', '60', '80'],
        correctAnswer: '40',
    },
],

        'Cube and Cuboid': [
    {
        question: 'What is the volume of a cube with a side length of 5 cm?',
        options: ['125 cm³', '150 cm³', '100 cm³', '80 cm³'],
        correctAnswer: '125 cm³',
    },
    {
        question: 'If the length of a cuboid is 8 cm, width is 4 cm, and height is 3 cm, what is its volume?',
        options: ['96 cm³', '84 cm³', '64 cm³', '72 cm³'],
        correctAnswer: '96 cm³',
    },
    {
        question: 'The surface area of a cube is 216 cm². What is the length of one side?',
        options: ['6 cm', '8 cm', '10 cm', '12 cm'],
        correctAnswer: '6 cm',
    },
    {
        question: 'If a cuboid has dimensions 3 m, 4 m, and 5 m, what is its total surface area?',
        options: ['62 m²', '64 m²', '60 m²', '66 m²'],
        correctAnswer: '62 m²',
    },
    {
        question: 'What is the volume of a cube if its surface area is 150 cm²?',
        options: ['25 cm³', '36 cm³', '27 cm³', '64 cm³'],
        correctAnswer: '36 cm³',
    },
    {
        question: 'If a cuboid has a length of 10 cm, width of 5 cm, and height of 2 cm, what is its volume?',
        options: ['100 cm³', '50 cm³', '70 cm³', '200 cm³'],
        correctAnswer: '100 cm³',
    },
    {
        question: 'A cube has a side length of 4 m. What is the volume of the cube?',
        options: ['48 m³', '64 m³', '32 m³', '36 m³'],
        correctAnswer: '64 m³',
    },
    {
        question: 'The length, width, and height of a cuboid are in the ratio 3:2:1. If the height is 4 cm, what is the volume of the cuboid?',
        options: ['24 cm³', '32 cm³', '48 cm³', '36 cm³'],
        correctAnswer: '24 cm³',
    },
    {
        question: 'What is the surface area of a cube with a side length of 3 cm?',
        options: ['54 cm²', '36 cm²', '27 cm²', '48 cm²'],
        correctAnswer: '54 cm²',
    },
    {
        question: 'If the volume of a cube is 512 cm³, what is the length of one side?',
        options: ['8 cm', '10 cm', '6 cm', '4 cm'],
        correctAnswer: '8 cm',
    },
    {
        question: 'A cuboid has dimensions of 7 cm, 3 cm, and 4 cm. What is its total surface area?',
        options: ['94 cm²', '84 cm²', '88 cm²', '72 cm²'],
        correctAnswer: '94 cm²',
    },
    {
        question: 'What is the length of the side of a cube if its volume is 729 cm³?',
        options: ['10 cm', '9 cm', '12 cm', '8 cm'],
        correctAnswer: '9 cm',
    },
    {
        question: 'If a cuboid has a volume of 200 cm³ and the height is 5 cm, what is the area of the base?',
        options: ['40 cm²', '50 cm²', '20 cm²', '30 cm²'],
        correctAnswer: '40 cm²',
    },
    {
        question: 'What is the volume of a cuboid with length 6 m, width 4 m, and height 2 m?',
        options: ['48 m³', '60 m³', '72 m³', '32 m³'],
        correctAnswer: '48 m³',
    },
    {
        question: 'The surface area of a cuboid is 94 cm², and the dimensions are 3 cm, 4 cm, and x cm. What is the value of x?',
        options: ['5 cm', '6 cm', '7 cm', '8 cm'],
        correctAnswer: '5 cm',
    },
    {
        question: 'A cube has a total surface area of 150 cm². What is the volume of the cube?',
        options: ['1000 cm³', '125 cm³', '150 cm³', '216 cm³'],
        correctAnswer: '125 cm³',
    },
    {
        question: 'If the length of a cuboid is doubled, while width and height remain the same, how does its volume change?',
        options: ['It doubles', 'It triples', 'It quadruples', 'It remains the same'],
        correctAnswer: 'It doubles',
    },
    {
        question: 'A cube has a volume of 27 m³. What is the total surface area?',
        options: ['108 m²', '72 m²', '54 m²', '64 m²'],
        correctAnswer: '108 m²',
    },
    {
        question: 'If a cube has a volume of x³ cm³, what is the length of one side?',
        options: ['x cm', 'x² cm', 'x³ cm', '3x cm'],
        correctAnswer: 'x cm',
    },
],

        'Analogy': [
    {
        question: 'Dog is to Bark as Cat is to ____.',
        options: ['Meow', 'Roar', 'Chirp', 'Growl'],
        correctAnswer: 'Meow',
    },
    {
        question: 'Water is to Liquid as Ice is to ____.',
        options: ['Solid', 'Gas', 'Melt', 'Freeze'],
        correctAnswer: 'Solid',
    },
    {
        question: 'Fire is to Heat as Ice is to ____.',
        options: ['Cold', 'Burn', 'Melt', 'Chill'],
        correctAnswer: 'Cold',
    },
    {
        question: 'Tree is to Forest as Star is to ____.',
        options: ['Galaxy', 'Planet', 'Moon', 'Comet'],
        correctAnswer: 'Galaxy',
    },
    {
        question: 'Book is to Read as Food is to ____.',
        options: ['Eat', 'Cook', 'Serve', 'Prepare'],
        correctAnswer: 'Eat',
    },
    {
        question: 'Bird is to Fly as Fish is to ____.',
        options: ['Swim', 'Walk', 'Dive', 'Jump'],
        correctAnswer: 'Swim',
    },
    {
        question: 'Artist is to Paint as Writer is to ____.',
        options: ['Compose', 'Draw', 'Sketch', 'Write'],
        correctAnswer: 'Write',
    },
    {
        question: 'Teacher is to Class as Doctor is to ____.',
        options: ['Patient', 'Clinic', 'Hospital', 'Medicine'],
        correctAnswer: 'Patient',
    },
    {
        question: 'Pencil is to Write as Eraser is to ____.',
        options: ['Draw', 'Delete', 'Sketch', 'Create'],
        correctAnswer: 'Delete',
    },
    {
        question: 'Clock is to Time as Thermometer is to ____.',
        options: ['Temperature', 'Weather', 'Pressure', 'Humidity'],
        correctAnswer: 'Temperature',
    },
    {
        question: 'Ocean is to Water as Desert is to ____.',
        options: ['Sand', 'Heat', 'Dryness', 'Wind'],
        correctAnswer: 'Sand',
    },
    {
        question: 'Keyboard is to Type as Mouse is to ____.',
        options: ['Click', 'Scroll', 'Navigate', 'Point'],
        correctAnswer: 'Click',
    },
    {
        question: 'Nurse is to Hospital as Chef is to ____.',
        options: ['Restaurant', 'Kitchen', 'Food', 'Service'],
        correctAnswer: 'Restaurant',
    },
    {
        question: 'Sun is to Day as Moon is to ____.',
        options: ['Night', 'Darkness', 'Sky', 'Stars'],
        correctAnswer: 'Night',
    },
    {
        question: 'Seed is to Plant as Egg is to ____.',
        options: ['Bird', 'Chicken', 'Hatch', 'Grow'],
        correctAnswer: 'Chicken',
    },
    {
        question: 'Key is to Lock as Password is to ____.',
        options: ['Computer', 'Access', 'Secure', 'Login'],
        correctAnswer: 'Login',
    },
    {
        question: 'Mountain is to Climb as River is to ____.',
        options: ['Swim', 'Float', 'Dive', 'Row'],
        correctAnswer: 'Swim',
    },
    {
        question: 'Waves are to Ocean as Winds are to ____.',
        options: ['Air', 'Sky', 'Cloud', 'Storm'],
        correctAnswer: 'Air',
    },
    {
        question: 'Bee is to Honey as Cow is to ____.',
        options: ['Milk', 'Meat', 'Leather', 'Grass'],
        correctAnswer: 'Milk',
    },
    {
        question: 'Train is to Track as Car is to ____.',
        options: ['Road', 'Garage', 'Drive', 'Engine'],
        correctAnswer: 'Road',
    },
],

       'Seating Arrangement': [
    {
        question: 'A, B, C, D, E are sitting in a row. If A is to the left of B and C is to the right of D, who is sitting in the middle?',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'B',
    },
    {
        question: 'In a circular seating arrangement, if A is facing B and C is sitting to the right of A, who is sitting opposite to C?',
        options: ['A', 'B', 'D', 'E'],
        correctAnswer: 'E',
    },
    {
        question: 'Five friends are sitting in a row. If P is at one end and Q is at the other end, who is sitting between R and S?',
        options: ['P', 'Q', 'R', 'S'],
        correctAnswer: 'R',
    },
    {
        question: 'In a straight line, if X is taller than Y and Y is taller than Z, who is the shortest?',
        options: ['X', 'Y', 'Z', 'None of these'],
        correctAnswer: 'Z',
    },
    {
        question: 'A, B, C, D, and E are sitting around a circular table. If A is to the immediate right of B and D is between C and E, who is sitting to the left of D?',
        options: ['A', 'B', 'C', 'E'],
        correctAnswer: 'C',
    },
    {
        question: 'If G is sitting next to F and H is sitting opposite to F, who is sitting next to H?',
        options: ['G', 'F', 'E', 'D'],
        correctAnswer: 'G',
    },
    {
        question: 'In a group of 6 people, if A is sitting next to B and C is sitting opposite to A, who can be next to C?',
        options: ['B', 'D', 'E', 'F'],
        correctAnswer: 'B',
    },
    {
        question: 'If T is sitting between U and V, and W is sitting to the right of U, who is sitting to the left of V?',
        options: ['T', 'U', 'W', 'None of these'],
        correctAnswer: 'U',
    },
    {
        question: 'In a linear arrangement, if M is to the right of N and O is to the left of N, who is sitting in the middle?',
        options: ['M', 'N', 'O', 'None of these'],
        correctAnswer: 'N',
    },
    {
        question: 'If E is sitting next to F and G is sitting to the left of F, who is sitting to the right of E?',
        options: ['F', 'G', 'None of these', 'All of these'],
        correctAnswer: 'F',
    },
    {
        question: 'A, B, C, D are sitting in a row facing north. If C is to the right of A and B is to the left of C, who is sitting in the middle?',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 'C',
    },
    {
        question: 'If P is sitting at one end of a row and Q is sitting at the opposite end, who can sit next to P?',
        options: ['R', 'S', 'T', 'U'],
        correctAnswer: 'R',
    },
    {
        question: 'In a circular arrangement, if A is facing B and C is to the left of A, who is sitting directly opposite to A?',
        options: ['B', 'C', 'D', 'E'],
        correctAnswer: 'B',
    },
    {
        question: 'Five friends are seated in a row. If D is sitting between A and B, and C is sitting at one end, who is at the other end?',
        options: ['A', 'B', 'D', 'C'],
        correctAnswer: 'D',
    },
    {
        question: 'If X is sitting to the right of Y and Z is sitting to the left of Y, who is sitting in the middle?',
        options: ['X', 'Y', 'Z', 'None of these'],
        correctAnswer: 'Y',
    },
    {
        question: 'In a circular table, if A is opposite B and C is sitting next to A, who is sitting next to B?',
        options: ['A', 'C', 'D', 'None of these'],
        correctAnswer: 'D',
    },
    {
        question: 'If R is sitting next to S and T is opposite R, who can be next to T?',
        options: ['R', 'S', 'U', 'None of these'],
        correctAnswer: 'S',
    },
    {
        question: 'In a group of 7 people sitting in a circle, if A is to the right of B and C is to the left of A, who is sitting opposite to C?',
        options: ['A', 'B', 'D', 'E'],
        correctAnswer: 'B',
    },
    {
        question: 'If P is sitting between Q and R, and S is sitting at one end of the row, who can be at the opposite end?',
        options: ['P', 'Q', 'R', 'S'],
        correctAnswer: 'S',
    },
],

      'Character Puzzles': [
    {
        question: 'In a certain code, "APPLE" is written as "BQQMF". How is "GRAPE" written in that code?',
        options: ['HSBQF', 'HSPQF', 'HSBPE', 'HSTQE'],
        correctAnswer: 'HSBQF',
    },
    {
        question: 'If "CAT" is coded as "3120", what is the code for "DOG"?',
        options: ['415', '417', '418', '421'],
        correctAnswer: '415',
    },
    {
        question: 'In a certain language, "BAT" is coded as "3" and "CAT" is coded as "4". What is the code for "MAT"?',
        options: ['4', '5', '6', '3'],
        correctAnswer: '4',
    },
    {
        question: 'If in a code language "GREAT" is written as "HSEBS", how will "FIGHT" be written?',
        options: ['GJHGU', 'GJHIV', 'HJHIV', 'HJKGU'],
        correctAnswer: 'GJHGU',
    },
    {
        question: 'In a code language, "SUN" is written as "TVO". What is the code for "MOON"?',
        options: ['NPPQ', 'NPPM', 'NQPN', 'NQMO'],
        correctAnswer: 'NPPQ',
    },
    {
        question: 'If "HELLO" is coded as "IFMMP", what is the code for "WORLD"?',
        options: ['XPSME', 'XPSLD', 'XPQMD', 'XPSMD'],
        correctAnswer: 'XPSME',
    },
    {
        question: 'In a certain language, "RAT" is written as "XAW". How is "BAT" written in that language?',
        options: ['XAW', 'ZAX', 'ZAY', 'ZAV'],
        correctAnswer: 'ZAY',
    },
    {
        question: 'If "SAND" is coded as "TBSE", what is the code for "WIND"?',
        options: ['XJOG', 'XJPH', 'YJPH', 'YJOG'],
        correctAnswer: 'XJOG',
    },
    {
        question: 'In a code language, "PENCIL" is written as "QFODJM". How is "ERASER" coded?',
        options: ['FSBTFS', 'FSGTSF', 'FTBSFT', 'FTBSFS'],
        correctAnswer: 'FSBTFS',
    },
    {
        question: 'If "COW" is coded as "5", how is "DOG" coded?',
        options: ['4', '6', '5', '3'],
        correctAnswer: '4',
    },
    {
        question: 'In a certain code, "FACE" is written as "GDBF". What is the code for "WIND"?',
        options: ['XHOE', 'XHMF', 'XJME', 'XHND'],
        correctAnswer: 'XHMF',
    },
    {
        question: 'If "BLUE" is coded as "CVNF", how is "RED" coded?',
        options: ['SFE', 'SFD', 'SEF', 'SFC'],
        correctAnswer: 'SFE',
    },
    {
        question: 'In a language, "HOUSE" is written as "IPTUF". What is the code for "MOUSE"?',
        options: ['NQTUF', 'NQTUE', 'OQTUF', 'OQTUE'],
        correctAnswer: 'NQTUF',
    },
    {
        question: 'If "JUMP" is coded as "KVOQ", what is the code for "FALL"?',
        options: ['GBMM', 'GCMN', 'GCMO', 'GCMO'],
        correctAnswer: 'GBMM',
    },
    {
        question: 'In a code language, "BIRD" is written as "CJEI". How is "FISH" written?',
        options: ['GJTI', 'GJTK', 'GJTN', 'GJTM'],
        correctAnswer: 'GJTI',
    },
    {
        question: 'If "SKY" is coded as "TLZ", how is "SUN" coded?',
        options: ['TVO', 'TWP', 'TVO', 'TWN'],
        correctAnswer: 'TVO',
    },
    {
        question: 'In a certain code, "TABLE" is written as "UDBMF". How is "CHAIR" written in that code?',
        options: ['DIBJS', 'DIBKT', 'DIBHR', 'DIBKS'],
        correctAnswer: 'DIBJS',
    },
    {
        question: 'If "MICE" is coded as "NJD", what is the code for "CATS"?',
        options: ['DBUT', 'DBUS', 'DBUS', 'DBUS'],
        correctAnswer: 'DBUT',
    },
    {
        question: 'In a certain language, "FROG" is coded as "GSPH". What is the code for "HEN"?',
        options: ['IFP', 'IGP', 'JGP', 'KGP'],
        correctAnswer: 'IGP',
    },
    {
        question: 'If "KITE" is coded as "LJUF", how is "POND" coded?',
        options: ['QOEF', 'QOFC', 'QOCF', 'QOEF'],
        correctAnswer: 'QOEF',
    },
],

       'Direction Sense Test': [
    {
        question: 'A man is facing east. He turns 90° in the clockwise direction, then turns 180° in the anticlockwise direction. Which direction is he facing now?',
        options: ['North', 'South', 'East', 'West'],
        correctAnswer: 'West',
    },
    {
        question: 'Ravi is facing north. He turns 45° towards the right, then turns 90° towards the left. In which direction is he now facing?',
        options: ['North-East', 'North-West', 'South-East', 'South-West'],
        correctAnswer: 'North-West',
    },
    {
        question: 'A person walks 10 meters south, then 5 meters east. In which direction is he from the starting point?',
        options: ['North-East', 'South-East', 'South-West', 'North-West'],
        correctAnswer: 'South-East',
    },
    {
        question: 'If a man is facing west and he turns 270° in the clockwise direction, which direction will he face?',
        options: ['East', 'North', 'South', 'West'],
        correctAnswer: 'South',
    },
    {
        question: 'A woman is facing south. She turns 90° towards her left and then turns 90° towards her right. Which direction is she facing now?',
        options: ['South', 'East', 'West', 'North'],
        correctAnswer: 'South',
    },
    {
        question: 'If a man walks 20 meters north, then turns left and walks 30 meters. In which direction is he now?',
        options: ['North', 'South', 'East', 'West'],
        correctAnswer: 'West',
    },
    {
        question: 'A boy walks 15 meters towards the east, then 10 meters towards the north. How far is he from the starting point?',
        options: ['15 meters', '20 meters', '25 meters', '30 meters'],
        correctAnswer: '18.03 meters',
    },
    {
        question: 'After walking 10 meters east, a man turns left and walks 5 meters. Then he turns left again and walks 10 meters. In which direction is he now?',
        options: ['North', 'South', 'East', 'West'],
        correctAnswer: 'West',
    },
    {
        question: 'A person walks 30 meters to the north, then turns right and walks 20 meters. After that, he turns left and walks 30 meters. In which direction is he now from his starting point?',
        options: ['North-East', 'South-East', 'South-West', 'North-West'],
        correctAnswer: 'South-East',
    },
    {
        question: 'If a man faces north and walks 5 steps, then turns right and walks 3 steps, in which direction is he now?',
        options: ['East', 'West', 'North', 'South'],
        correctAnswer: 'East',
    },
    {
        question: 'A girl moves 10 meters to the south and then 10 meters to the east. How far is she from the starting point?',
        options: ['10 meters', '14 meters', '20 meters', '5 meters'],
        correctAnswer: '14.14 meters',
    },
    {
        question: 'A man walks 12 meters towards the south, then turns left and walks 12 meters. In which direction is he now?',
        options: ['North', 'South', 'East', 'West'],
        correctAnswer: 'East',
    },
    {
        question: 'Starting from point A, a man moves 10 meters east and then 10 meters north. What is his position with respect to point A?',
        options: ['10 meters East', '10 meters North', '10√2 meters', '20 meters'],
        correctAnswer: '10√2 meters',
    },
    {
        question: 'If a person is facing south and turns 90° clockwise and then 90° anticlockwise, which direction will he be facing?',
        options: ['North', 'South', 'East', 'West'],
        correctAnswer: 'South',
    },
    {
        question: 'A man walks 30 meters north and then 40 meters east. In which direction is he from his starting point?',
        options: ['North-East', 'South-East', 'North-West', 'South-West'],
        correctAnswer: 'North-East',
    },
    {
        question: 'After moving 10 meters towards the north, a person turns right and moves 5 meters. In which direction is he facing now?',
        options: ['East', 'West', 'North', 'South'],
        correctAnswer: 'East',
    },
    {
        question: 'A boy walks 20 meters towards the west, then turns south and walks 30 meters. Finally, he turns east and walks 20 meters. How far is he from the starting point?',
        options: ['30 meters', '20 meters', '10 meters', '0 meters'],
        correctAnswer: '10 meters',
    },
    {
        question: 'If a person walks 15 meters south, then turns east and walks 20 meters, then turns north and walks 15 meters. In which direction is he from the starting point?',
        options: ['North', 'South', 'East', 'West'],
        correctAnswer: 'East',
    },
    {
        question: 'A man faces east and walks 50 meters, then turns to his left and walks 50 meters. What direction is he now facing?',
        options: ['North', 'South', 'East', 'West'],
        correctAnswer: 'North',
    },
],

        'Classification': [
    {
        question: 'Which of the following is a mammal?',
        options: ['Shark', 'Eagle', 'Frog', 'Elephant'],
        correctAnswer: 'Elephant',
    },
    {
        question: 'Which of the following is not a fruit?',
        options: ['Apple', 'Carrot', 'Banana', 'Grape'],
        correctAnswer: 'Carrot',
    },
    {
        question: 'Which one of the following is a prime number?',
        options: ['4', '6', '9', '11'],
        correctAnswer: '11',
    },
    {
        question: 'Which of the following is a type of tree?',
        options: ['Rose', 'Tulip', 'Oak', 'Daisy'],
        correctAnswer: 'Oak',
    },
    {
        question: 'Which of the following animals is a reptile?',
        options: ['Lizard', 'Frog', 'Goldfish', 'Cat'],
        correctAnswer: 'Lizard',
    },
    {
        question: 'Which of the following is a type of dance?',
        options: ['Ballet', 'Guitar', 'Piano', 'Violin'],
        correctAnswer: 'Ballet',
    },
    {
        question: 'Which of these is a mode of transportation?',
        options: ['Bicycle', 'Laptop', 'Television', 'Chair'],
        correctAnswer: 'Bicycle',
    },
    {
        question: 'Which of the following is not a continent?',
        options: ['Asia', 'Africa', 'Australia', 'Russia'],
        correctAnswer: 'Russia',
    },
    {
        question: 'Which of the following is a type of cloud?',
        options: ['Cumulus', 'Aquatic', 'Granite', 'Volcanic'],
        correctAnswer: 'Cumulus',
    },
    {
        question: 'Which of the following is a vegetable?',
        options: ['Spinach', 'Banana', 'Peach', 'Mango'],
        correctAnswer: 'Spinach',
    },
    {
        question: 'Which of the following is not a programming language?',
        options: ['Python', 'Java', 'HTML', 'C++'],
        correctAnswer: 'HTML',
    },
    {
        question: 'Which of the following is a bird?',
        options: ['Dolphin', 'Bat', 'Penguin', 'Lizard'],
        correctAnswer: 'Penguin',
    },
    {
        question: 'Which of the following is an electronic device?',
        options: ['Television', 'Apple', 'Carrot', 'Table'],
        correctAnswer: 'Television',
    },
    {
        question: 'Which of the following is a mineral?',
        options: ['Salt', 'Sugar', 'Honey', 'Flour'],
        correctAnswer: 'Salt',
    },
    {
        question: 'Which of the following is a body of water?',
        options: ['Mountain', 'River', 'Forest', 'Desert'],
        correctAnswer: 'River',
    },
    {
        question: 'Which of the following is a genre of music?',
        options: ['Jazz', 'Canvas', 'Wood', 'Marble'],
        correctAnswer: 'Jazz',
    },
    {
        question: 'Which of the following is a planet?',
        options: ['Sun', 'Earth', 'Star', 'Moon'],
        correctAnswer: 'Earth',
    },
    {
        question: 'Which of the following is a common household pet?',
        options: ['Dog', 'Elephant', 'Lion', 'Tiger'],
        correctAnswer: 'Dog',
    },
    {
        question: 'Which of the following is a musical instrument?',
        options: ['Drum', 'Paint', 'Canvas', 'Brush'],
        correctAnswer: 'Drum',
    },
    {
        question: 'Which of the following is a natural satellite?',
        options: ['Earth', 'Mars', 'Moon', 'Venus'],
        correctAnswer: 'Moon',
    },
    {
        question: 'Which of the following is an Olympic sport?',
        options: ['Chess', 'Football', 'Board Games', 'Video Games'],
        correctAnswer: 'Football',
    },
],

        'Data Sufficiency': [
    {
        question: 'Is the number x greater than 10? 1) x is an even number. 2) x is less than 20.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Statement 2 alone is sufficient.',
    },
    {
        question: 'What is the value of y? 1) y is twice the value of x. 2) x + y = 20.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Both statements together are sufficient.',
    },
    {
        question: 'Is a number z even? 1) z is divisible by 4. 2) z is a prime number.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Statement 1 alone is sufficient.',
    },
    {
        question: 'What is the length of side a? 1) The perimeter of the triangle is 30 cm. 2) The other two sides are 10 cm each.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Both statements together are sufficient.',
    },
    {
        question: 'Is the employee E eligible for promotion? 1) E has a performance rating above average. 2) E has been with the company for more than 5 years.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Statements are not sufficient.',
    },
    {
        question: 'What is the distance between point A and point B? 1) The distance from A to C is 5 miles. 2) The distance from C to B is 3 miles.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Both statements together are sufficient.',
    },
    {
        question: 'Is x > y? 1) x = 2y. 2) y = 5.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Statement 1 alone is sufficient.',
    },
    {
        question: 'What is the average age of the group? 1) The ages of the individuals are 20, 30, and 40. 2) There are 3 individuals in the group.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Both statements together are sufficient.',
    },
    {
        question: 'Is the product p positive? 1) p = a × b where a is negative. 2) b is positive.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Statement 1 alone is sufficient.',
    },
    {
        question: 'What is the profit from selling item X? 1) The selling price of item X is $50. 2) The cost price of item X is $30.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Both statements together are sufficient.',
    },
    {
        question: 'Is the number n a multiple of 3? 1) n is divisible by 9. 2) n is an even number.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Statement 1 alone is sufficient.',
    },
    {
        question: 'What is the area of the rectangle? 1) The length is 10 cm. 2) The width is 5 cm.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Both statements together are sufficient.',
    },
    {
        question: 'Is x equal to y? 1) x + y = 0. 2) x = -y.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Both statements together are sufficient.',
    },
    {
        question: 'Is the number k greater than 100? 1) k is a three-digit number. 2) k is an even number.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Statement 1 alone is sufficient.',
    },
    {
        question: 'What is the sum of two numbers? 1) The first number is 15. 2) The second number is 25.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Both statements together are sufficient.',
    },
    {
        question: 'Is the angle θ obtuse? 1) θ > 90°. 2) θ < 180°.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Statement 1 alone is sufficient.',
    },
    {
        question: 'What is the total cost of the items? 1) Item A costs $10. 2) Item B costs $20.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Both statements together are sufficient.',
    },
    {
        question: 'Is m greater than n? 1) m = n + 5. 2) n = 2.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Both statements together are sufficient.',
    },
    {
        question: 'What is the height of the triangle? 1) The area is 30 cm². 2) The base is 10 cm.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Both statements together are sufficient.',
    },
    {
        question: 'Is x divisible by 12? 1) x is divisible by 3. 2) x is divisible by 4.',
        options: ['Statement 1 alone is sufficient.', 'Statement 2 alone is sufficient.', 'Both statements together are sufficient.', 'Statements are not sufficient.'],
        correctAnswer: 'Both statements together are sufficient.',
    },
],

       'Arithmetic Reasoning': [
    {
        question: 'If the cost of 5 apples is $2.50, what is the cost of 12 apples?',
        options: ['$5.00', '$6.00', '$6.50', '$7.00'],
        correctAnswer: '$6.00',
    },
    {
        question: 'A car travels 120 miles in 2 hours. What is the average speed of the car?',
        options: ['50 mph', '60 mph', '70 mph', '80 mph'],
        correctAnswer: '60 mph',
    },
    {
        question: 'If 8 workers can complete a task in 10 days, how many days will 4 workers take to complete the same task?',
        options: ['20 days', '30 days', '40 days', '50 days'],
        correctAnswer: '40 days',
    },
    {
        question: 'A book is on sale for 20% off the original price of $25. What is the sale price?',
        options: ['$20', '$22', '$23', '$25'],
        correctAnswer: '$20',
    },
    {
        question: 'If a tank can hold 500 liters of water and is currently filled to 60%, how much more water is needed to fill it to capacity?',
        options: ['200 liters', '300 liters', '400 liters', '500 liters'],
        correctAnswer: '200 liters',
    },
    {
        question: 'A train leaves a station at 3 PM traveling at 45 mph. How far will it travel by 5 PM?',
        options: ['80 miles', '90 miles', '100 miles', '110 miles'],
        correctAnswer: '90 miles',
    },
    {
        question: 'If you buy 3 shirts for $15 each, what is the total cost including a 10% sales tax?',
        options: ['$49.50', '$45.00', '$46.50', '$50.00'],
        correctAnswer: '$49.50',
    },
    {
        question: 'If a recipe requires 2 cups of flour to make 12 cookies, how many cups are needed to make 30 cookies?',
        options: ['3 cups', '4 cups', '5 cups', '6 cups'],
        correctAnswer: '5 cups',
    },
    {
        question: 'A man has $1,200 and spends 15% of it on groceries. How much does he have left?',
        options: ['$1,020', '$1,050', '$1,100', '$1,150'],
        correctAnswer: '$1,020',
    },
    {
        question: 'If a bicycle costs $300 and you get a discount of 25%, what is the final price?',
        options: ['$225', '$250', '$275', '$300'],
        correctAnswer: '$225',
    },
    {
        question: 'How many months are there in 5 years?',
        options: ['60', '62', '64', '66'],
        correctAnswer: '60',
    },
    {
        question: 'If a car gets 30 miles per gallon and the trip is 150 miles, how many gallons of gas will be needed?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '5',
    },
    {
        question: 'A person earns $15 per hour and works 40 hours a week. What is their weekly earnings?',
        options: ['$500', '$600', '$700', '$800'],
        correctAnswer: '$600',
    },
    {
        question: 'What is the total cost of 4 notebooks priced at $2.50 each, including a 5% tax?',
        options: ['$10.00', '$10.50', '$11.00', '$12.00'],
        correctAnswer: '$10.50',
    },
    {
        question: 'If a store has a sale of 30% off all items, how much would a $50 item cost after the discount?',
        options: ['$30', '$32', '$35', '$37'],
        correctAnswer: '$35',
    },
    {
        question: 'A recipe calls for 3/4 cup of sugar. If you want to make half the recipe, how much sugar do you need?',
        options: ['1/4 cup', '1/3 cup', '1/2 cup', '2/3 cup'],
        correctAnswer: '1/3 cup',
    },
    {
        question: 'If the price of a shirt increases from $20 to $25, what is the percentage increase?',
        options: ['20%', '25%', '30%', '35%'],
        correctAnswer: '25%',
    },
    {
        question: 'A person saves $100 every month. How much will they save in 3 years?',
        options: ['$3,600', '$3,000', '$2,400', '$2,000'],
        correctAnswer: '$3,600',
    },
    {
        question: 'If you have a piece of ribbon that is 60 inches long and you cut it into 3 equal pieces, how long is each piece?',
        options: ['15 inches', '20 inches', '25 inches', '30 inches'],
        correctAnswer: '20 inches',
    },
    {
        question: 'A bag of oranges weighs 2.5 kg. If you buy 3 bags, what is the total weight?',
        options: ['6 kg', '7.5 kg', '8 kg', '9 kg'],
        correctAnswer: '7.5 kg',
    },
],

        'Verification of Truth': [
    {
        question: 'If all cats are animals and some animals are dogs, can we say that some cats are dogs?',
        options: ['True', 'False'],
        correctAnswer: 'False',
    },
    {
        question: 'If it is raining, then the ground is wet. It is raining. What can we conclude?',
        options: ['The ground is wet', 'The ground is dry'],
        correctAnswer: 'The ground is wet',
    },
    {
        question: 'All birds can fly. A penguin is a bird. Can a penguin fly?',
        options: ['True', 'False'],
        correctAnswer: 'False',
    },
    {
        question: 'If every employee in a company has a computer, and John is an employee, does John have a computer?',
        options: ['True', 'False'],
        correctAnswer: 'True',
    },
    {
        question: 'If it is a holiday, the store is closed. Today is a holiday. Is the store closed?',
        options: ['True', 'False'],
        correctAnswer: 'True',
    },
    {
        question: 'All fruits are sweet. An apple is a fruit. Is an apple sweet?',
        options: ['True', 'False'],
        correctAnswer: 'True',
    },
    {
        question: 'If no humans can fly and John is a human, can John fly?',
        options: ['True', 'False'],
        correctAnswer: 'False',
    },
    {
        question: 'If it is snowing, then it is cold. It is not snowing. Can we conclude it is not cold?',
        options: ['True', 'False'],
        correctAnswer: 'False',
    },
    {
        question: 'If all squares are rectangles and all rectangles are shapes, are all squares shapes?',
        options: ['True', 'False'],
        correctAnswer: 'True',
    },
    {
        question: 'If a dog is a mammal and all mammals have lungs, does a dog have lungs?',
        options: ['True', 'False'],
        correctAnswer: 'True',
    },
    {
        question: 'If every action has an equal and opposite reaction, is it true that actions lead to reactions?',
        options: ['True', 'False'],
        correctAnswer: 'True',
    },
    {
        question: 'If all mammals are warm-blooded and whales are mammals, are whales warm-blooded?',
        options: ['True', 'False'],
        correctAnswer: 'True',
    },
    {
        question: 'If some plants are trees and all trees are living organisms, are some plants living organisms?',
        options: ['True', 'False'],
        correctAnswer: 'True',
    },
    {
        question: 'If a person is a doctor, then they have a medical degree. Sarah has a medical degree. Can we conclude Sarah is a doctor?',
        options: ['True', 'False'],
        correctAnswer: 'False',
    },
    {
        question: 'If all metals conduct electricity and copper is a metal, does copper conduct electricity?',
        options: ['True', 'False'],
        correctAnswer: 'True',
    },
    {
        question: 'If it is sunny, then it is warm. It is warm. Can we conclude it is sunny?',
        options: ['True', 'False'],
        correctAnswer: 'False',
    },
    {
        question: 'If a person is a child, then they are not an adult. Mark is not an adult. Is Mark a child?',
        options: ['True', 'False'],
        correctAnswer: 'False',
    },
    {
        question: 'If all dogs bark and Buddy is a dog, does Buddy bark?',
        options: ['True', 'False'],
        correctAnswer: 'True',
    },
    {
        question: 'If it is a weekday, then I go to work. Today is a weekend. Am I going to work?',
        options: ['True', 'False'],
        correctAnswer: 'False',
    },
    {
        question: 'If all vehicles have wheels and a bicycle is a vehicle, does a bicycle have wheels?',
        options: ['True', 'False'],
        correctAnswer: 'True',
    },
    {
        question: 'If some fruits are tropical and mango is a tropical fruit, are all tropical fruits mangoes?',
        options: ['True', 'False'],
        correctAnswer: 'False',
    },
],

      },
    },
    {
      name: 'Nonverbal Reasoning',
      description: 'Data and graph-based problem-solving.',
      folders: {
        'Series': [
    {
        question: 'What is the next number in the series? 2, 4, 6, 8, ...',
        options: ['9', '10', '11', '12'],
        correctAnswer: '10',
    },
    {
        question: 'What is the next term in the series? 5, 10, 20, 40, ...',
        options: ['60', '70', '80', '100'],
        correctAnswer: '80',
    },
    {
        question: 'What number should come next? 1, 1, 2, 3, 5, 8, ...',
        options: ['10', '12', '13', '15'],
        correctAnswer: '13',
    },
    {
        question: 'Find the next number in the series: 3, 6, 9, 12, ...',
        options: ['14', '15', '16', '17'],
        correctAnswer: '15',
    },
    {
        question: 'What is the next element in the series? 7, 14, 21, 28, ...',
        options: ['32', '35', '42', '49'],
        correctAnswer: '35',
    },
    {
        question: 'What is the next number? 100, 90, 80, 70, ...',
        options: ['60', '65', '75', '80'],
        correctAnswer: '60',
    },
    {
        question: 'Identify the next term in the series: 1, 4, 9, 16, ...',
        options: ['20', '21', '25', '30'],
        correctAnswer: '25',
    },
    {
        question: 'What comes next in this series? 10, 20, 30, 40, ...',
        options: ['45', '50', '55', '60'],
        correctAnswer: '50',
    },
    {
        question: 'What number should follow? 2, 5, 10, 17, ...',
        options: ['26', '27', '28', '29'],
        correctAnswer: '26',
    },
    {
        question: 'What is the next number in this pattern? 1, 2, 4, 8, ...',
        options: ['12', '14', '16', '20'],
        correctAnswer: '16',
    },
    {
        question: 'What is the next element in this series? 15, 30, 45, 60, ...',
        options: ['65', '70', '75', '80'],
        correctAnswer: '75',
    },
    {
        question: 'Find the next term in the series: 8, 16, 24, 32, ...',
        options: ['36', '40', '48', '56'],
        correctAnswer: '40',
    },
    {
        question: 'What number should come next? 1, 3, 6, 10, ...',
        options: ['11', '12', '13', '15'],
        correctAnswer: '15',
    },
    {
        question: 'Identify the next number in the series: 9, 18, 27, 36, ...',
        options: ['43', '45', '54', '63'],
        correctAnswer: '45',
    },
    {
        question: 'What comes next in this series? 2, 3, 5, 7, ...',
        options: ['9', '11', '13', '15'],
        correctAnswer: '11',
    },
    {
        question: 'What is the next number? 20, 18, 16, 14, ...',
        options: ['12', '13', '14', '15'],
        correctAnswer: '12',
    },
    {
        question: 'What number follows in this pattern? 1, 4, 7, 10, ...',
        options: ['11', '12', '13', '14'],
        correctAnswer: '13',
    },
    {
        question: 'What is the next term in the series? 3, 8, 15, 24, ...',
        options: ['35', '36', '37', '38'],
        correctAnswer: '35',
    },
    {
        question: 'What should come next? 1, 1, 2, 3, 5, 8, ...',
        options: ['11', '12', '13', '14'],
        correctAnswer: '13',
    },
    {
        question: 'What is the next number in the series? 50, 45, 40, 35, ...',
        options: ['30', '25', '20', '15'],
        correctAnswer: '30',
    },
],

       'Analogy': [
    {
        question: 'Cat is to Kitten as Dog is to ______.',
        options: ['Puppy', 'Cub', 'Calf', 'Foal'],
        correctAnswer: 'Puppy',
    },
    {
        question: 'Bird is to Nest as Spider is to ______.',
        options: ['Web', 'Burrow', 'Hive', 'Den'],
        correctAnswer: 'Web',
    },
    {
        question: 'Book is to Reading as Fork is to ______.',
        options: ['Eating', 'Cooking', 'Cutting', 'Serving'],
        correctAnswer: 'Eating',
    },
    {
        question: 'Fire is to Heat as Ice is to ______.',
        options: ['Cold', 'Frost', 'Snow', 'Chill'],
        correctAnswer: 'Cold',
    },
    {
        question: 'Teacher is to School as Doctor is to ______.',
        options: ['Hospital', 'Clinic', 'Pharmacy', 'Nurse'],
        correctAnswer: 'Hospital',
    },
    {
        question: 'Tree is to Forest as Star is to ______.',
        options: ['Galaxy', 'Sky', 'Planet', 'Moon'],
        correctAnswer: 'Galaxy',
    },
    {
        question: 'Artist is to Paint as Musician is to ______.',
        options: ['Compose', 'Song', 'Guitar', 'Music'],
        correctAnswer: 'Music',
    },
    {
        question: 'Winter is to Snow as Summer is to ______.',
        options: ['Heat', 'Rain', 'Sunshine', 'Cool'],
        correctAnswer: 'Heat',
    },
    {
        question: 'Fish is to School as Wolf is to ______.',
        options: ['Pack', 'Herd', 'Flock', 'Gaggle'],
        correctAnswer: 'Pack',
    },
    {
        question: 'Ocean is to Wave as Mountain is to ______.',
        options: ['Peak', 'Rock', 'Hill', 'Slope'],
        correctAnswer: 'Peak',
    },
    {
        question: 'Keyboard is to Typing as Mouse is to ______.',
        options: ['Clicking', 'Scrolling', 'Moving', 'Dragging'],
        correctAnswer: 'Clicking',
    },
    {
        question: 'Language is to Speech as Code is to ______.',
        options: ['Computer', 'Program', 'Language', 'Software'],
        correctAnswer: 'Program',
    },
    {
        question: 'Sun is to Day as Moon is to ______.',
        options: ['Night', 'Sky', 'Star', 'Light'],
        correctAnswer: 'Night',
    },
    {
        question: 'Nurse is to Patient as Chef is to ______.',
        options: ['Food', 'Kitchen', 'Recipe', 'Meal'],
        correctAnswer: 'Food',
    },
    {
        question: 'Pen is to Write as Brush is to ______.',
        options: ['Paint', 'Draw', 'Color', 'Create'],
        correctAnswer: 'Paint',
    },
    {
        question: 'Tree is to Leaf as Flower is to ______.',
        options: ['Petal', 'Stem', 'Root', 'Seed'],
        correctAnswer: 'Petal',
    },
    {
        question: 'Baker is to Bread as Butcher is to ______.',
        options: ['Meat', 'Fish', 'Cheese', 'Eggs'],
        correctAnswer: 'Meat',
    },
    {
        question: 'Horse is to Stable as Bee is to ______.',
        options: ['Hive', 'Nest', 'Swarm', 'Colony'],
        correctAnswer: 'Hive',
    },
    {
        question: 'Photographer is to Camera as Painter is to ______.',
        options: ['Canvas', 'Brush', 'Palette', 'Color'],
        correctAnswer: 'Brush',
    },
    {
        question: 'Doctor is to Cure as Teacher is to ______.',
        options: ['Educate', 'Instruct', 'Train', 'Guide'],
        correctAnswer: 'Educate',
    },
    {
        question: 'Ant is to Colony as Bee is to ______.',
        options: ['Swarm', 'Nest', 'Hive', 'Group'],
        correctAnswer: 'Hive',
    },
],

       'Classification': [
    {
        question: 'Which of the following is a mammal?',
        options: ['Shark', 'Eagle', 'Dolphin', 'Lizard'],
        correctAnswer: 'Dolphin',
    },
    {
        question: 'Which one of these is a fruit?',
        options: ['Carrot', 'Potato', 'Apple', 'Broccoli'],
        correctAnswer: 'Apple',
    },
    {
        question: 'Which of the following is a type of tree?',
        options: ['Rose', 'Cactus', 'Pine', 'Fern'],
        correctAnswer: 'Pine',
    },
    {
        question: 'Identify the odd one out: Cat, Dog, Rabbit, Carrot.',
        options: ['Cat', 'Dog', 'Rabbit', 'Carrot'],
        correctAnswer: 'Carrot',
    },
    {
        question: 'Which of the following is an insect?',
        options: ['Spider', 'Ant', 'Snail', 'Crab'],
        correctAnswer: 'Ant',
    },
    {
        question: 'Which of the following is a mineral?',
        options: ['Quartz', 'Coal', 'Oil', 'Wood'],
        correctAnswer: 'Quartz',
    },
    {
        question: 'Identify the category: Rose, Tulip, Sunflower.',
        options: ['Fruit', 'Flower', 'Vegetable', 'Tree'],
        correctAnswer: 'Flower',
    },
    {
        question: 'Which of the following is a means of transportation?',
        options: ['Bicycle', 'Elephant', 'Tree', 'Rock'],
        correctAnswer: 'Bicycle',
    },
    {
        question: 'Which of the following is a natural satellite?',
        options: ['Mars', 'Moon', 'Earth', 'Venus'],
        correctAnswer: 'Moon',
    },
    {
        question: 'Identify the odd one out: Table, Chair, Sofa, Car.',
        options: ['Table', 'Chair', 'Sofa', 'Car'],
        correctAnswer: 'Car',
    },
    {
        question: 'Which of these is a primary color?',
        options: ['Green', 'Purple', 'Blue', 'Orange'],
        correctAnswer: 'Blue',
    },
    {
        question: 'Identify the category: Basketball, Football, Cricket.',
        options: ['Sport', 'Music', 'Dance', 'Art'],
        correctAnswer: 'Sport',
    },
    {
        question: 'Which of the following is an ocean?',
        options: ['Amazon', 'Nile', 'Pacific', 'Yangtze'],
        correctAnswer: 'Pacific',
    },
    {
        question: 'Which of the following is a reptile?',
        options: ['Frog', 'Lizard', 'Goldfish', 'Eagle'],
        correctAnswer: 'Lizard',
    },
    {
        question: 'Identify the category: Physics, Chemistry, Mathematics.',
        options: ['Art', 'Science', 'Literature', 'History'],
        correctAnswer: 'Science',
    },
    {
        question: 'Which of these is a vegetable?',
        options: ['Apple', 'Carrot', 'Banana', 'Grape'],
        correctAnswer: 'Carrot',
    },
    {
        question: 'Which of the following is a continent?',
        options: ['Asia', 'Egypt', 'Amazon', 'Florida'],
        correctAnswer: 'Asia',
    },
    {
        question: 'Identify the odd one out: Winter, Summer, Spring, School.',
        options: ['Winter', 'Summer', 'Spring', 'School'],
        correctAnswer: 'School',
    },
    {
        question: 'Which of the following is a gas?',
        options: ['Oxygen', 'Water', 'Iron', 'Sand'],
        correctAnswer: 'Oxygen',
    },
    {
        question: 'Which of the following is a mode of communication?',
        options: ['Television', 'Tree', 'Mountain', 'River'],
        correctAnswer: 'Television',
    },
    {
        question: 'Identify the category: Shakespeare, Hemingway, Rowling.',
        options: ['Painters', 'Musicians', 'Authors', 'Scientists'],
        correctAnswer: 'Authors',
    },
],

        'Analytical Reasoning': [
    {
        question: 'If all roses are flowers and some flowers fade quickly, can we conclude that some roses fade quickly?',
        options: ['Yes', 'No', 'Cannot be determined', 'Only if they are red'],
        correctAnswer: 'Cannot be determined',
    },
    {
        question: 'A train leaves a station and travels at 60 km/h. Another train leaves the same station 30 minutes later and travels at 90 km/h. When will the second train catch up with the first?',
        options: ['1 hour', '2 hours', '3 hours', '4 hours'],
        correctAnswer: '1 hour',
    },
    {
        question: 'If a circle has a radius of 5 cm, what is its circumference?',
        options: ['10π cm', '15π cm', '25π cm', '30π cm'],
        correctAnswer: '10π cm',
    },
    {
        question: 'In a certain code language, "BOOK" is written as "CPPL". How will "PEN" be written in that language?',
        options: ['QDO', 'QEO', 'QEP', 'QFP'],
        correctAnswer: 'QEO',
    },
    {
        question: 'If all cats are mammals and some mammals are not dogs, can we conclude that some cats are not dogs?',
        options: ['Yes', 'No', 'Cannot be determined', 'Only if they are black'],
        correctAnswer: 'Cannot be determined',
    },
    {
        question: 'A rectangle has a length that is twice its width. If the perimeter is 48 cm, what is the area of the rectangle?',
        options: ['96 cm²', '144 cm²', '192 cm²', '64 cm²'],
        correctAnswer: '96 cm²',
    },
    {
        question: 'If the sum of three consecutive numbers is 60, what is the smallest of the three numbers?',
        options: ['18', '19', '20', '21'],
        correctAnswer: '19',
    },
    {
        question: 'In a family of six members A, B, C, D, E, and F, A is the father of B, B is the sister of C, C is the brother of D, and E is the mother of F. How is D related to A?',
        options: ['Son', 'Daughter', 'Son-in-law', 'Cannot be determined'],
        correctAnswer: 'Daughter',
    },
    {
        question: 'If the day before yesterday was Monday, what day will it be in two days?',
        options: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
        correctAnswer: 'Wednesday',
    },
    {
        question: 'If 5 workers can complete a task in 20 days, how many workers are needed to complete the same task in 10 days?',
        options: ['10', '15', '5', '20'],
        correctAnswer: '10',
    },
    {
        question: 'A clock shows the time as 3:15. What is the angle between the hour hand and the minute hand?',
        options: ['45°', '90°', '112.5°', '135°'],
        correctAnswer: '112.5°',
    },
    {
        question: 'A box contains 5 red balls, 3 blue balls, and 2 green balls. If one ball is drawn at random, what is the probability that it is not blue?',
        options: ['1/5', '2/5', '4/5', '3/5'],
        correctAnswer: '4/5',
    },
    {
        question: 'If the sequence is 2, 4, 8, 16, what is the next number in the sequence?',
        options: ['20', '24', '32', '36'],
        correctAnswer: '32',
    },
    {
        question: 'If the total cost of 10 notebooks is Rs. 500, what is the cost of one notebook?',
        options: ['Rs. 45', 'Rs. 50', 'Rs. 55', 'Rs. 60'],
        correctAnswer: 'Rs. 50',
    },
    {
        question: 'If x + y = 10 and x - y = 2, what is the value of x?',
        options: ['4', '5', '6', '7'],
        correctAnswer: '6',
    },
    {
        question: 'In a group of students, if 60% are boys and 40% are girls, what is the ratio of boys to girls?',
        options: ['3:2', '2:3', '3:4', '4:3'],
        correctAnswer: '3:2',
    },
    {
        question: 'If a book is sold for Rs. 200 with a profit of 25%, what is the cost price of the book?',
        options: ['Rs. 150', 'Rs. 160', 'Rs. 180', 'Rs. 190'],
        correctAnswer: 'Rs. 160',
    },
    {
        question: 'A person travels 60 km at a speed of 15 km/h and then 30 km at a speed of 10 km/h. What is the average speed for the entire journey?',
        options: ['12 km/h', '15 km/h', '20 km/h', '25 km/h'],
        correctAnswer: '12 km/h',
    },
    {
        question: 'If a triangle has angles of 45°, 45°, and 90°, what type of triangle is it?',
        options: ['Acute', 'Right', 'Obtuse', 'Equilateral'],
        correctAnswer: 'Right',
    },
    {
        question: 'If a number is increased by 10% and then decreased by 10%, what is the net effect on the number?',
        options: ['0%', '1%', '2%', '3%'],
        correctAnswer: '1%',
    },
],

        'Mirror Images': [
    {
        question: 'Which of the following is the mirror image of the letter "B"?',
        options: ['D', 'P', 'Q', 'None of these'],
        correctAnswer: 'P',
    },
    {
        question: 'What will be the mirror image of the number "2"?',
        options: ['Z', '5', 'S', 'None of these'],
        correctAnswer: '5',
    },
    {
        question: 'If "A" is the original letter, which of the following is its mirror image?',
        options: ['V', 'H', 'M', 'None of these'],
        correctAnswer: 'V',
    },
    {
        question: 'What is the mirror image of the word "SWIM"?',
        options: ['MIWS', 'MIMS', 'MSIW', 'None of these'],
        correctAnswer: 'MIWS',
    },
    {
        question: 'Which of the following shapes has a symmetrical mirror image?',
        options: ['Circle', 'Square', 'Triangle', 'All of these'],
        correctAnswer: 'All of these',
    },
    {
        question: 'What will be the mirror image of the number "9"?',
        options: ['6', '0', '8', 'None of these'],
        correctAnswer: '6',
    },
    {
        question: 'Which letter remains unchanged when reflected in a mirror?',
        options: ['C', 'D', 'H', 'Z'],
        correctAnswer: 'H',
    },
    {
        question: 'What will be the mirror image of the letter "M"?',
        options: ['W', 'V', 'U', 'None of these'],
        correctAnswer: 'W',
    },
    {
        question: 'Which of the following figures shows the correct mirror image?',
        options: ['Figure A', 'Figure B', 'Figure C', 'None of these'],
        correctAnswer: 'Figure B',
    },
    {
        question: 'What will be the mirror image of the word "DOG"?',
        options: ['GOD', 'DOO', 'ODG', 'None of these'],
        correctAnswer: 'GOD',
    },
    {
        question: 'Which of the following letters will have the same mirror image?',
        options: ['L', 'T', 'B', 'None of these'],
        correctAnswer: 'T',
    },
    {
        question: 'What is the mirror image of the letter "P"?',
        options: ['Q', 'R', 'D', 'None of these'],
        correctAnswer: 'Q',
    },
    {
        question: 'Which digit does not change in its mirror image?',
        options: ['3', '2', '5', '8'],
        correctAnswer: '8',
    },
    {
        question: 'What will be the mirror image of the letter "X"?',
        options: ['X', 'Y', 'Z', 'None of these'],
        correctAnswer: 'X',
    },
    {
        question: 'Which of the following numbers is not symmetrical when reflected in a mirror?',
        options: ['1', '0', '6', '9'],
        correctAnswer: '6',
    },
    {
        question: 'If "E" is the original letter, what is its mirror image?',
        options: ['F', 'H', 'Z', 'None of these'],
        correctAnswer: 'None of these',
    },
    {
        question: 'Which of the following shapes has no mirror symmetry?',
        options: ['Square', 'Circle', 'Triangle', 'Rectangle'],
        correctAnswer: 'None of these',
    },
    {
        question: 'What will be the mirror image of the letter "K"?',
        options: ['L', 'R', 'J', 'None of these'],
        correctAnswer: 'None of these',
    },
    {
        question: 'What is the mirror image of the word "RACE"?',
        options: ['ECAR', 'ERAC', 'CAER', 'None of these'],
        correctAnswer: 'ECAR',
    },
    {
        question: 'Which letter has no mirror image?',
        options: ['M', 'A', 'N', 'O'],
        correctAnswer: 'N',
    },
],

        'Water Images': [
    {
        question: 'What is the water image of the letter "D"?',
        options: ['P', 'Q', 'B', 'None of these'],
        correctAnswer: 'P',
    },
    {
        question: 'Which letter remains unchanged when reflected in water?',
        options: ['M', 'H', 'O', 'N'],
        correctAnswer: 'H',
    },
    {
        question: 'What will be the water image of the word "PEN"?',
        options: ['DEP', 'NEP', 'NEP', 'None of these'],
        correctAnswer: 'NEP',
    },
    {
        question: 'What is the water image of the letter "G"?',
        options: ['C', 'U', 'Q', 'None of these'],
        correctAnswer: 'C',
    },
    {
        question: 'What will be the water image of the letter "R"?',
        options: ['A', 'J', 'F', 'None of these'],
        correctAnswer: 'A',
    },
    {
        question: 'Which digit does not change in its water image?',
        options: ['6', '9', '0', '3'],
        correctAnswer: '0',
    },
    {
        question: 'What will be the water image of the letter "K"?',
        options: ['R', 'R', 'X', 'None of these'],
        correctAnswer: 'R',
    },
    {
        question: 'What is the water image of the word "FARM"?',
        options: ['MRFA', 'FAMR', 'MAFR', 'None of these'],
        correctAnswer: 'MAFR',
    },
    {
        question: 'Which letter has a different water image?',
        options: ['H', 'B', 'C', 'E'],
        correctAnswer: 'E',
    },
    {
        question: 'What is the water image of the letter "L"?',
        options: ['J', 'F', 'E', 'None of these'],
        correctAnswer: 'J',
    },
    {
        question: 'What will be the water image of the number "8"?',
        options: ['0', '8', '6', 'None of these'],
        correctAnswer: '8',
    },
    {
        question: 'What is the water image of the letter "W"?',
        options: ['M', 'V', 'U', 'None of these'],
        correctAnswer: 'M',
    },
    {
        question: 'What will be the water image of the letter "A"?',
        options: ['V', 'U', 'H', 'None of these'],
        correctAnswer: 'V',
    },
    {
        question: 'What is the water image of the word "SUN"?',
        options: ['NUS', 'UNS', 'SU', 'None of these'],
        correctAnswer: 'NUS',
    },
    {
        question: 'Which letter has a water image that is symmetrical?',
        options: ['X', 'K', 'T', 'Y'],
        correctAnswer: 'Y',
    },
    {
        question: 'What is the water image of the number "5"?',
        options: ['2', '3', '5', 'None of these'],
        correctAnswer: '2',
    },
    {
        question: 'What will be the water image of the letter "E"?',
        options: ['F', 'S', 'H', 'None of these'],
        correctAnswer: 'H',
    },
    {
        question: 'What is the water image of the word "BOOK"?',
        options: ['KOOB', 'OOBK', 'BOKO', 'None of these'],
        correctAnswer: 'KOOB',
    },
    {
        question: 'Which digit changes its form in its water image?',
        options: ['0', '1', '2', '3'],
        correctAnswer: '3',
    },
    {
        question: 'What is the water image of the letter "S"?',
        options: ['Z', 'N', 'C', 'None of these'],
        correctAnswer: 'Z',
    },
    {
        question: 'What will be the water image of the letter "T"?',
        options: ['L', 'I', 'J', 'None of these'],
        correctAnswer: 'L',
    },
],

      'Embedded Images': [
    {
        question: 'What is the primary purpose of embedding images in a document?',
        options: ['To increase file size', 'To improve text readability', 'To enhance visual appeal', 'To reduce loading time'],
        correctAnswer: 'To enhance visual appeal',
    },
    {
        question: 'Which file format is commonly used for embedded images in web pages?',
        options: ['.txt', '.pdf', '.jpg', '.exe'],
        correctAnswer: '.jpg',
    },
    {
        question: 'What is the effect of using high-resolution images embedded in a webpage?',
        options: ['Faster loading time', 'Higher quality', 'Lower quality', 'No effect on loading time'],
        correctAnswer: 'Higher quality',
    },
    {
        question: 'Which HTML tag is used to embed an image?',
        options: ['<img>', '<picture>', '<image>', '<embed>'],
        correctAnswer: '<img>',
    },
    {
        question: 'What does the "alt" attribute in an image tag do?',
        options: ['Changes the image size', 'Provides alternative text', 'Specifies image format', 'Links to another page'],
        correctAnswer: 'Provides alternative text',
    },
    {
        question: 'Which image format is best for graphics with transparent backgrounds?',
        options: ['.jpg', '.png', '.gif', '.bmp'],
        correctAnswer: '.png',
    },
    {
        question: 'What is the disadvantage of using embedded images in emails?',
        options: ['Low quality', 'High loading speed', 'Increased chance of being marked as spam', 'None of these'],
        correctAnswer: 'Increased chance of being marked as spam',
    },
    {
        question: 'What is the maximum recommended size for embedded images in web design?',
        options: ['50 KB', '100 KB', '200 KB', 'As large as possible'],
        correctAnswer: '200 KB',
    },
    {
        question: 'Which software is commonly used to edit embedded images?',
        options: ['Microsoft Word', 'Adobe Photoshop', 'Notepad', 'Google Docs'],
        correctAnswer: 'Adobe Photoshop',
    },
    {
        question: 'What does it mean when an image is described as "embedded"?',
        options: ['It is linked from another site', 'It is stored within the document', 'It is in a separate file', 'It is not visible'],
        correctAnswer: 'It is stored within the document',
    },
    {
        question: 'Which CSS property can be used to adjust the size of an embedded image?',
        options: ['width', 'height', 'border', 'padding'],
        correctAnswer: 'width',
    },
    {
        question: 'How can you ensure that embedded images are responsive on a webpage?',
        options: ['Use fixed sizes', 'Use relative sizes', 'Ignore size settings', 'Embed large images'],
        correctAnswer: 'Use relative sizes',
    },
    {
        question: 'What is a common way to optimize embedded images for web use?',
        options: ['Increase resolution', 'Compress the image', 'Decrease contrast', 'Add more colors'],
        correctAnswer: 'Compress the image',
    },
    {
        question: 'Which of the following is NOT a benefit of using embedded images?',
        options: ['Enhanced user engagement', 'Increased page load speed', 'Improved aesthetic appeal', 'Better content understanding'],
        correctAnswer: 'Increased page load speed',
    },
    {
        question: 'What happens if an embedded image file is deleted from the source?',
        options: ['Image quality improves', 'The image disappears', 'The image stays but loses quality', 'Nothing happens'],
        correctAnswer: 'The image disappears',
    },
    {
        question: 'What type of image should be embedded to maintain transparency?',
        options: ['JPEG', 'GIF', 'PNG', 'BMP'],
        correctAnswer: 'PNG',
    },
    {
        question: 'Which of the following attributes is used to specify the path of the embedded image?',
        options: ['src', 'href', 'path', 'url'],
        correctAnswer: 'src',
    },
    {
        question: 'What is the main advantage of using vector images as embedded images?',
        options: ['Higher quality at any size', 'Lower file size', 'Faster loading times', 'Easier to edit'],
        correctAnswer: 'Higher quality at any size',
    },
    {
        question: 'What does the term "image embedding" commonly refer to in web design?',
        options: ['Using text links', 'Incorporating images directly into the code', 'Storing images in a database', 'None of these'],
        correctAnswer: 'Incorporating images directly into the code',
    },
    {
        question: 'Which tool can be used to check the accessibility of embedded images?',
        options: ['Image viewer', 'HTML validator', 'Accessibility checker', 'None of these'],
        correctAnswer: 'Accessibility checker',
    },
    {
        question: 'What should you consider when choosing embedded images for a presentation?',
        options: ['File format only', 'Relevance and quality', 'Color scheme only', 'Size only'],
        correctAnswer: 'Relevance and quality',
    },
],

        'Pattern Completion': [
    {
        question: 'What comes next in the pattern: A, B, C, D, ___?',
        options: ['E', 'F', 'G', 'H'],
        correctAnswer: 'E',
    },
    {
        question: 'Complete the sequence: 2, 4, 6, 8, ___?',
        options: ['10', '12', '14', '16'],
        correctAnswer: '10',
    },
    {
        question: 'What is the next number in the pattern: 1, 1, 2, 3, 5, ___?',
        options: ['8', '13', '21', '34'],
        correctAnswer: '8',
    },
    {
        question: 'Find the missing letter: A, C, E, G, ___?',
        options: ['H', 'I', 'J', 'K'],
        correctAnswer: 'I',
    },
    {
        question: 'What completes the series: 5, 10, 15, 20, ___?',
        options: ['25', '30', '35', '40'],
        correctAnswer: '25',
    },
    {
        question: 'What is the next shape in the sequence: Circle, Triangle, Square, Circle, Triangle, ___?',
        options: ['Square', 'Pentagon', 'Hexagon', 'Octagon'],
        correctAnswer: 'Square',
    },
    {
        question: 'Complete the number series: 3, 6, 9, 12, ___?',
        options: ['15', '16', '17', '18'],
        correctAnswer: '15',
    },
    {
        question: 'What is the next term in the pattern: X, Y, Z, A, B, ___?',
        options: ['C', 'D', 'E', 'F'],
        correctAnswer: 'C',
    },
    {
        question: 'Find the next item: Red, Blue, Green, Red, Blue, ___?',
        options: ['Green', 'Yellow', 'Orange', 'Purple'],
        correctAnswer: 'Green',
    },
    {
        question: 'What completes the series: 100, 90, 80, 70, ___?',
        options: ['60', '65', '75', '85'],
        correctAnswer: '60',
    },
    {
        question: 'Complete the pattern: 1, 4, 9, 16, ___?',
        options: ['20', '21', '25', '30'],
        correctAnswer: '25',
    },
    {
        question: 'What is the next letter in the series: F, G, H, I, ___?',
        options: ['J', 'K', 'L', 'M'],
        correctAnswer: 'J',
    },
    {
        question: 'Find the missing number: 1, 2, 4, 7, 11, ___?',
        options: ['12', '13', '14', '15'],
        correctAnswer: '16',
    },
    {
        question: 'What comes next: 7, 14, 21, 28, ___?',
        options: ['35', '36', '40', '42'],
        correctAnswer: '35',
    },
    {
        question: 'Complete the series: O, T, T, F, F, S, S, ___?',
        options: ['E', 'N', 'T', 'W'],
        correctAnswer: 'E',
    },
    {
        question: 'What completes the sequence: 2, 5, 10, 17, ___?',
        options: ['26', '27', '28', '29'],
        correctAnswer: '26',
    },
    {
        question: 'Complete the pattern: 1, 3, 6, 10, ___?',
        options: ['12', '14', '15', '16'],
        correctAnswer: '15',
    },
    {
        question: 'Find the next number: 2, 3, 5, 7, 11, ___?',
        options: ['12', '13', '14', '15'],
        correctAnswer: '13',
    },
    {
        question: 'What is the next item in this pattern: 1, 1, 2, 3, 5, 8, ___?',
        options: ['10', '11', '12', '13'],
        correctAnswer: '13',
    },
    {
        question: 'Complete the series: 9, 18, 27, 36, ___?',
        options: ['42', '45', '48', '50'],
        correctAnswer: '45',
    },
    {
        question: 'What comes next in the series: 10, 20, 30, 40, ___?',
        options: ['50', '60', '70', '80'],
        correctAnswer: '50',
    },
],

        
      },
    },
  ];

  

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [isQuizActive, setIsQuizActive] = useState(false);



  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setSelectedFolder(null);
    setIsQuizActive(false);
  };

  const handleFolderClick = (folderName, questions) => {
    setSelectedFolder({ name: folderName, questions });
    setIsQuizActive(true);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Left Sidebar - Topics */}
      <div className="w-1/4 bg-black border border-customBlack rounded-lg p-5  h-screen  flex flex-col">
      
        <h2 className="text-2xl font-bold mb-5">Aptitude Topics</h2>
        <CategoryList categories={categories} handleCategoryClick={handleCategoryClick} currentCategory={currentCategory} />
      </div>

      {/* Right Section - Folders and Quiz */}
      <div className="rightSection w-3/4 p-5 h-screen overflow-y-auto">
        <Breadcrumb
          path={[
            { name: 'Aptitude', onClick: () => setCurrentCategory(null) },
            currentCategory && {
              name: currentCategory.name,
              onClick: () => setIsQuizActive(false),
            },
            selectedFolder && { name: selectedFolder.name },
          ].filter(Boolean)}
        />

        {!isQuizActive && currentCategory && (
          <FolderList 
            folders={currentCategory.folders} 
            handleFolderClick={handleFolderClick} 
          />
        )}

        {isQuizActive && selectedFolder && (
          <QuizSection folder={selectedFolder} />
        )}
      </div>
    </div>
  );
};

export default Aptitude;
