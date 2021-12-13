import { screen, render } from '@testing-library/react'
import Home from './Home'

it('Should show a user profile', async () => {
  const { container } = render(
    <Home
      user={{
        id: 1,
        created_at: '2021-12-13T00:17:29+00:00',
        name: 'Vonta',
        avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
        header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
        likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
        motto: 'Res Non Verba',
        color: 'crimson',
      }}
    />
  )

  const profileName = await screen.findByText(/vonta/i)
  expect(profileName).toBeInTheDocument()

  expect(container).toMatchSnapshot()
})
