import { Button } from "antd";
import { useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi";
import ColumnGroup from "antd/es/table/ColumnGroup";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

type TUserInfo = {
  id: string;
  password: string;
};

export default function Login() {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 'A-0001',
      password: '123456'
    }
  });
  const [login, { error }] = useLoginMutation()

  const onSubmit = async (data: TUserInfo) => {
    const userInfo = {
      id: data.id,
      password: data.password
    };

    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);

    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register('id')} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" {...register('password')} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  )
}
