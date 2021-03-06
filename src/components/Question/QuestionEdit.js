import React from 'react';
import {
  Edit,
  TextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  BooleanInput,
  TopToolbar,
  required
} from 'react-admin';
import { Redirect } from 'react-router-dom';
import { parse } from 'query-string';
import BackButton from '../../BackButton';

const QuestionEdit = props => {
    
  const { QuestionnaireId: QuestionnaireId_string } = parse(props.location.search);
  const QuestionnaireId = QuestionnaireId_string ? parseInt(QuestionnaireId_string, 10) : '';
  const redirect = `/questionnaires/${QuestionnaireId}/show/questions`;

  return (
    QuestionnaireId ? ( 
    <Edit  {...props} actions={<TopToolbar><BackButton linkBack={redirect} titleBack="Annuler"/></TopToolbar>}>
      <SimpleForm
        redirect={redirect}
      >
        <ReferenceInput
          source="QuestionnaireId"
          reference="questionnaires"
          fullWidth
        >
            <SelectInput optionText="title" optionValue="id" value={QuestionnaireId} disabled />
        </ReferenceInput>
        <TextInput autoComplete="off" label="Question" source="title" fullWidth validate={required()} />
        <BooleanInput label="Upload format" source="uploadFormat" fullWidth defaultValue />
      </SimpleForm>
      </Edit>
    ) : (
        <Redirect to="/" />
    )
  );
};

export default QuestionEdit;
