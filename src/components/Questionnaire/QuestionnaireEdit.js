import React from 'react';
import {
  Edit,
  TextInput,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  required,
  TopToolbar
} from 'react-admin';
import BackButton from '../../BackButton';

const QuestionnaireEdit = props => {
  return (
    <Edit  {...props} actions={<TopToolbar><BackButton link={`${props.location.pathname}/show`} title="Annuler"/></TopToolbar>}>
      <SimpleForm
        redirect={`${props.location.pathname}/show`}
      >
        <ReferenceInput
          source="UserId"
          reference="users"
          label="Administrateur" 
          validate={required()}        
          fullWidth
        >
            <SelectInput optionText="username" defaultValue />
        </ReferenceInput>
          <TextInput multiline autoComplete="off" label="Titre du questionnaire" source="title" fullWidth validate={required()}  />
          <TextInput multiline autoComplete="off" label="Texte de présentation du questionnaire" source="participationText" fullWidth validate={required()} />
          <TextInput multiline autoComplete="off" label="Texte de présentation du mur d'images" source="presentationText" fullWidth validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default QuestionnaireEdit;
