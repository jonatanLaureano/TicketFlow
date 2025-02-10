import { NavigationMenu } from './NavigationMenu';
/* import { FirstFileMyPage } from '../MyPage';
import { SecondFileMyPage } from '../MyPage'; */

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  console.log(FormData);
};

export const Page = () => {
  return (
    <>
      <NavigationMenu />
      <form
        onSubmit={handleSubmit}
        className="mx-10 gap-16 my-10 grid grid-cols-1 md:grid-cols-2"
      >
        {/* <FirstFileMyPage />
        <SecondFileMyPage /> */}
      </form>
    </>
  )
}
