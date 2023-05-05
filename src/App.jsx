import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from 'user.json';
import dataStats from 'data.json';
import friend from 'friends.json';
import transaction from 'transactions.json';


export const App = () => {
  return (
    <div>
      <Profile
        avatarUrl={user.avatar}
        userName={user.username}
        tagUser={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics stats={dataStats} />

      <FriendList friends={friend} />

      <TransactionHistory items={transaction} />
    </div>
  );
};
