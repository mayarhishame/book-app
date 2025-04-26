import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Harry Potter and the Half-Blood Prince',
      imgUrl: '../../../assets/imgs/img1.jpg',
      author: 'J.K. Rowling',
      description:
        'The sixth installment in the Harry Potter series where Harry discovers an old potions textbook belonging to the "Half-Blood Prince" while at Hogwarts. As Voldemort tightens his grip on both the wizarding and Muggle worlds, Dumbledore prepares Harry for their final mission - to find and destroy Voldemort\'s remaining Horcruxes.',
    },
    {
      id: 2,
      title: 'Harry Potter and the Deathly Hallows',
      imgUrl: '../../../assets/imgs/img2.jpg',
      author: 'J.K. Rowling',
      description:
        "The epic conclusion to the Harry Potter series. Harry, Ron, and Hermione set out on their dangerous mission to track down and destroy Voldemort's Horcruxes. The trio must rely on each other more than ever as they face dark forces in their final battle against the Dark Lord.",
    },
    {
      id: 3,
      title: 'Harry Potter and the Goblet of Fire',
      imgUrl: '../../../assets/imgs/img3.jpg',
      author: 'J.K. Rowling',
      description:
        'The fourth book in the series where Harry finds himself mysteriously selected as a champion in the dangerous Triwizard Tournament. As mysterious events unfold at Hogwarts, the Dark Mark reappears for the first time in years, signaling that Voldemort is growing stronger.',
    },
    {
      id: 4,
      title: 'Harry Potter and the Chamber of Secrets',
      imgUrl: '../../../assets/imgs/img4.jpg',
      author: 'J.K. Rowling',
      description:
        'In this second book, Harry returns to Hogwarts for his second year, only to find strange things happening. Students are being petrified, and messages on the walls warn of the Chamber of Secrets being opened. Harry must uncover the truth behind these mysterious attacks with the help of his friends Ron and Hermione.',
    },
    {
      id: 5,
      title: 'Stranger Things Fanart Poster',
      imgUrl: '../../../assets/imgs/img5.jpg',
      author: 'The SonnyFive',
      description:
        'A Netflix original series fanart poster featuring the popular show Stranger Things. The poster captures the 80s nostalgia and supernatural elements of the show, with its iconic characters and upside-down world that has captivated audiences worldwide.',
    },
    {
      id: 6,
      title: "Harry Potter and the Philosopher's Stone",
      imgUrl: '../../../assets/imgs/img6.jpg',
      author: 'J.K. Rowling',
      description:
        "The book that started it all. Harry Potter discovers he's a famous wizard on his 11th birthday when he's invited to attend Hogwarts School of Witchcraft and Wizardry. As he makes new friends and learns magic, he uncovers a plot to steal the Philosopher's Stone that could bring the dark wizard Voldemort back to power.",
    },
    {
      id: 7,
      title: "Harry Potter and the Sorcerer's Stone (20th Anniversary)",
      imgUrl: '../../../assets/imgs/img7.jpg',
      author: 'J.K. Rowling',
      description:
        'A special 20th anniversary edition of the first Harry Potter book (titled "Sorcerer\'s Stone" in the US edition). This edition celebrates two decades of the magical journey that introduced readers to the wizarding world, complete with bonus content and nostalgic reflections on the cultural phenomenon.',
    },
    {
      id: 8,
      title: 'A White-Knuckle Adventure Above and Below the Sea',
      imgUrl: '../../../assets/imgs/img8.jpg',
      author: 'Beverley Scherberger',
      description:
        'An thrilling adventure novel that takes readers on a journey through both maritime and underwater worlds. The story follows daring explorers as they face dangerous sea creatures, underwater mysteries, and life-threatening situations in this action-packed marine adventure.',
    },
    {
      id: 9,
      title: 'Jeff Carson and David Wolf Novel',
      imgUrl: '../../../assets/imgs/img9.jpg',
      author: 'Jeff Carson and David Wolf',
      description:
        "A collaborative novel by authors Jeff Carson and David Wolf, featuring their signature blend of mystery and suspense. The story likely follows complex characters through intricate plots filled with unexpected twists and turns, showcasing the authors' talent for crafting compelling narratives.",
    },
  ];
  constructor() {}

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book | null {
    let foundedBook = this.books.find((book) => book.id === id);
    return foundedBook ? foundedBook : null;
  }
}
