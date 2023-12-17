import { ArchivalNoticeModal } from '@the-collab-lab/shopping-list-utils';
import { Navigate } from 'react-router-dom';
//components
import ShareTokenForm from './ShareTokenForm';
import Button from '../components/Button';
import Header from './Header';
//hooks
import useToken from '../hooks/useToken';
//images
import bag from '../assets/images/bag.svg';

const Home = () => {
  const { setToken } = useToken();

  const createToken = () => {
    // const newToken = getToken();
    // if (localStorage.getItem('token') === null) {
    //   localStorage.setItem('token', newToken);
    //   setToken(newToken);
    // }
    // navigate('/list');
    console.log('Creating lists is no longer supported');
  };

  if (localStorage.getItem('token')) {
    return <Navigate to="/list" />;
  }

  return (
    <>
      <Header
        title={'Welcome to your smart shopping list'}
        imageSrc={bag}
        isHome={true}
      />
      <section className="flex flex-col pt-32 text-center section-radius">
        <Button
          createToken={createToken}
          text="Create new List"
          width={'w-52'}
        />
        <p className="pt-8 font-bold text-xl">- or -</p>
        <p className="py-6 font-bold text-xl w-64 mx-auto">
          Join an existing shopping list by entering a three word token.
        </p>

        <ShareTokenForm setToken={setToken} />
      </section>
      <ArchivalNoticeModal />
    </>
  );
};

export default Home;
