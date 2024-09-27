<template>
    <div class="row justify-content-md-center">
        <div class="col col-lg-5">
            <h1>Update article</h1>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" v-model="formData.title">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3" v-model="formData.description"></textarea>
                </div>
           
                <button type="submit" class="btn btn-primary">
                    UPDATE
                </button>
            </form>
            <hr/>
            <button class="btn btn-danger" @click="deleteNote">
                Delete note
            </button>
        </div>
    </div>
</template>

<script setup>
    import { DB } from '@/firebase/config';
    import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
    import { reactive } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router =  useRouter();
    const formData = reactive({
        title:'',
        description:''
    });

    /// GET DO BY ID
    const docRef = doc(DB,'notes',route.params.id);
    getDoc(docRef)
    .then( snapshot =>{
        if(!snapshot.exists()){
            throw new Error("Could not find note");
        }
        formData.title = snapshot.data().title;
        formData.description = snapshot.data().description
    }).catch(error=>{
        console.log(error)
    })

    // Post update
    const submitForm = async() => {
       try {
            const docRef = doc(DB,'notes',route.params.id);
            await updateDoc(docRef,{...formData})
       } catch(error){
            console.log(error)
       }
    }


    // delete note
    const deleteNote = async() => {
        try{
            const docRef = doc(DB,'notes',route.params.id);
            await deleteDoc(docRef);
            router.push('/')
        } catch(error){
            console.log(error)
        }
    }

</script>