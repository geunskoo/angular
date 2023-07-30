export interface Page{
    title: string,
    url: string,
    icon: string
}

export const appPages: Page[] = [
    { title: 'spring', url: '/app/spring', icon: 'heart' },
    { title: 'java', url: '/app/java', icon: 'heart' },
    { title: 'hexagonal Architecture', url: '/hexagonal', icon: 'heart' },
    { title: 'angular', url: '/angular', icon: 'heart' },
    { title: 'ionic', url: '/ionic', icon: 'heart' },
  ];

  export const labels: string[] = [
    'made by geunskoo'
];