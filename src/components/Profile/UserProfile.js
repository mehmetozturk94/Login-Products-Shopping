import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <div class="jumbotron">
        <h1 class="display-4">Your User Profile</h1>
        <p class="lead">
          You can change your password in this field. Your password will be
          updated through the database!
        </p>
        <hr class="my-4" />
        <ProfileForm />
      </div>
    </section>
  );
};

export default UserProfile;
