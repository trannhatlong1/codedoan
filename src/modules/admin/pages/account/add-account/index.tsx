import React from "react";
import { useNavigate } from "react-router";
import useAccounts from "../../../../../common/hook/useAccounts";
import useCreateCart from "../../../../../common/hook/useCreateCart";
import useRegister from "../../../../../common/hook/useRegister";
import { IAccount } from "../../../../../common/type";
import AccountForm from "../account-form";

type Props = {};

const AddAccount = (props: Props) => {
  const navigate = useNavigate();
  const { getAccounts } = useAccounts();
  const { register } = useRegister();
  const onSave = async (values: IAccount) => {
    await register(values);
    await getAccounts();
    navigate("/admin-account");
  };
  return (
    <AccountForm title="Tạo mới người dùng" typeForm="create" onSave={onSave} />
  );
};

export default AddAccount;
