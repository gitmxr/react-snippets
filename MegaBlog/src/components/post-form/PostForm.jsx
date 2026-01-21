import React, {useCallback} from 'react';
import { useForm} from 'react-hook-form';
import {Select, Input, Button, RTE} from '../index';
import appwriteService from '../../appwrite/config';
import {useSelector} from 'react-redux';

function PostForm(){
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: '',
            content: '',
            tags: [],
            status: 'public',
            cover: '',
        }
    });
    return (
      
    );
}